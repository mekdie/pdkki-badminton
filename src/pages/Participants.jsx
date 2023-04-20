import { useState, useEffect } from "react";
import {
    collection,
    getDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { ref, deleteObject } from "firebase/storage";
import { Container, Table, Button, Modal } from "react-bootstrap";
import PasscodeInput from "../components/PasscodeInput";
import { scale } from "../Helpers";
//react loading
import ReactLoading from "react-loading";

//Modal components
import ConfirmationModal from "../components/ConfirmationModal";

function App() {
    const [users, setUsers] = useState([]);

    const [passcode, setPasscode] = useState(null);
    const [passcodeFlag, setPasscodeFlag] = useState(false);
    const [passcodeValidation, setPasscodeValidation] = useState(true);

    const usersCollectionRef = collection(db, "users");

    // const [loading, setLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    //modal state
    const [showModal, setShowModal] = useState(false);

    //invoice
    const [currentInvoice, setCurrentInvoice] = useState(null);
    const [showInvoiceModal, setShowInvoiceModal] = useState(false);

    //modal props for single delete
    const [deletedId, setDeletedId] = useState(null);
    const [deleteType, setDeleteType] = useState(null);
    // const [modalProps, setModalProps] = useState({});
    const [showModalSingle, setShowModalSingle] = useState(false);

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        // console.log(data.docs[0].data());
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getPagePasscode = async () => {
        const passcodeDoc = doc(
            db,
            "passcode",
            process.env.REACT_APP_PARTICIPANTS_PASSCODE_ID
        );
        const docSnap = await getDoc(passcodeDoc);

        setPasscode(docSnap.data().participants);
    };

    useEffect(() => {
        // reference:
        // https://firebase.google.com/docs/firestore/query-data/get-data

        getUsers();
        getPagePasscode();
    }, []);

    let counter = 1;

    //update user to update the paid fields (next dev)
    const updateUser = async (id, newPaid) => {
        const userDoc = doc(db, "users", id);
        const paid = { paid: !newPaid };

        await updateDoc(userDoc, paid);

        getUsers();
    };

    // Modals for deleting single user / multiple users
    const deleteModal = (id, type) => {
        //types param:
        // - type 1: single delete record
        // - type 2 : multiple delete records

        if (type === 1) {
            if (showModalSingle) {
                setShowModalSingle(false);
            } else {
                setShowModalSingle(true);
            }

            setDeletedId(id);
            setDeleteType(1);
        } else if (type === 2) {
            console.log("multiple delete here");
            setShowModal(true);
        }

        // setModalProps({
        //     showModal: true,
        //     // confirm: deleteUser(id),
        //     message: "Are you sure you want to delete this record?",
        //     title: "Delete record",
        // });

        // setModalProps((prev) => ({
        //     showModal: true,
        //     onHide: setShowModal(false),
        //     confirm: _deleteUser(id),
        //     message: "Are you sure you want to delete this record?",
        //     title: "Delete record",
        // }));
    };

    // Actual delete user function that is called from the ConfirmationModal props
    const deleteUser = async () => {
        //single delete
        if (deleteType === 1) {
            if (deletedId) {
                const userDoc = doc(db, "users", deletedId);
                await deleteDoc(userDoc);
                //delete image from database
                const imageRef = ref(storage, `invoices/${deletedId}`);
                deleteObject(imageRef).then(() => {
                    console.log("user deleted");
                });
                setShowModalSingle(false);
            }
        }
        //multiple delete
        else {
            console.log("deleting multiple delete here");
        }

        getUsers();
    };

    //delete all records with modal confirmation
    const deleteAll = async () => {
        setShowModal(false);
        const deleteImgId = [];

        const data = await getDocs(usersCollectionRef);
        data.forEach(async (d) => {
            const userDoc = doc(db, "users", d.id);
            deleteImgId.push(d.id);
            await deleteDoc(userDoc);
        });

        //delete image from database
        deleteImgId.forEach((item) => {
            const imageRef = ref(storage, `invoices/${item}`);
            deleteObject(imageRef).then(() => {
                console.log("user deleted");
            });
        });

        getUsers();
    };

    const handlePasscodeSubmit = (e, inputValue) => {
        e.preventDefault();
        if (inputValue === passcode) {
            setPasscodeFlag(true);
            //set an artificial loading
            var i = 1;
            function artificialLoading() {
                //run every 1ms to 50 times
                setTimeout(function () {
                    if (i < 50) {
                        setLoadingProgress(scale(i, 0, 50, 0, 50).toFixed(0));
                        i++;
                        artificialLoading();
                    } else {
                        //100% flick
                        setLoadingProgress(100);
                        // setTimeout(() => setLoading(false), 100);
                    }
                }, 1);
            }
            artificialLoading();
        } else {
            setPasscodeValidation(false);
        }
    };
    const renderElements = () => {
        if (passcodeFlag) {
            return (
                <>
                    <h2>Participants' Registration</h2>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Timestamp</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Racquets</th>
                                <th>Level</th>
                                <th>Payment</th>
                                <th>Invoice</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loadingProgress !== 100 ? (
                                <tr className="align-middle text-center">
                                    <td colSpan={10}>
                                        <ReactLoading
                                            id="loadingParticipants"
                                            type="bars"
                                            color="grey"
                                        />{" "}
                                    </td>
                                </tr>
                            ) : (
                                renderParticipants()
                            )}
                        </tbody>
                        {users.length > 0 && (
                            <caption>
                                <Button
                                    variant="danger"
                                    onClick={() => setShowModal(true)}
                                >
                                    Delete all records
                                </Button>
                            </caption>
                        )}
                    </Table>
                </>
            );
        } else {
            return (
                <PasscodeInput
                    onSubmit={handlePasscodeSubmit}
                    wrongPasscode={passcodeValidation}
                />
            );
        }
    };

    const renderParticipants = () => {
        if (users.length > 0) {
            return users.map((user) => {
                return (
                    <tr className="align-middle" key={user.id}>
                        <td>{counter++}</td>
                        <td>{user.timestamp.toDate().toLocaleString()}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.racquets}</td>
                        <td>{user.level}</td>
                        <td>{user.paid ? "Paid" : "Unpaid"}</td>
                        <td
                            onClick={() => {
                                setShowInvoiceModal(true);
                                setCurrentInvoice(user);
                            }}
                            className="table-cell-image"
                        >
                            <img
                                src={user.imageUrl}
                                alt={`${user.name} invoice`}
                            />
                        </td>
                        <td>
                            {/* <Button
                                onClick={() => updateUser(user.id, user.paid)}
                                variant={user.paid ? "dark" : "success"}
                            >
                                {user.paid ? "Unpaid" : "Paid"}
                            </Button> */}
                            <Button
                                variant="info"
                                onClick={() => {
                                    setShowInvoiceModal(true);
                                    setCurrentInvoice(user);
                                }}
                            >
                                View
                            </Button>
                            <Button
                                variant="danger"
                                onClick={() => deleteModal(user.id, 1)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                );
            });
        } else {
            return (
                <tr className="align-middle text-center">
                    <td colSpan={10}>No participants found</td>
                </tr>
            );
        }
    };
    // temporary confirmation modal, soon needs to be in a different components file
    const removeAllModal = () => {
        return (
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="alert alert-danger">
                        Are you sure you want to delete all the records?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="default"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteAll}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    const invoiceModal = () => {
        if (currentInvoice) {
            return (
                <Modal
                    show={showInvoiceModal}
                    onHide={() => setShowInvoiceModal(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {currentInvoice.name}'s invoice
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <h4>Centered Modal</h4> */}
                        <img
                            className="w-100"
                            src={currentInvoice.imageUrl}
                            alt={`${currentInvoice.name}'s invoice `}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="default"
                            onClick={() => setShowInvoiceModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant={currentInvoice.paid ? "danger" : "success"}
                            onClick={() => {
                                updateUser(
                                    currentInvoice.id,
                                    currentInvoice.paid
                                );
                                setShowInvoiceModal(false);
                            }}
                        >
                            {currentInvoice.paid
                                ? "Cancel payment"
                                : "Confirm payment"}
                        </Button>
                    </Modal.Footer>
                </Modal>
            );
        }
    };

    return (
        <div className="App">
            <Container className="participants-container">
                <div className="row justify-content-center">
                    {renderElements()}
                </div>
                {removeAllModal()}
                {invoiceModal()}

                <ConfirmationModal
                    showModal={showModalSingle}
                    onHide={() => setShowModalSingle(false)}
                    confirm={() => deleteUser()}
                    message="Are you sure you want to delete this
                    record?"
                    title="Delete record"
                />
                {/* <ConfirmationModal
                    onHide={() => setShowModal(false)}
                    {...modalProps}
                /> */}
            </Container>
        </div>
    );
}

export default App;
