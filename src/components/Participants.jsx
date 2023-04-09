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
import { ref, getDownloadURL } from "firebase/storage";
import { Container, Table, Button } from "react-bootstrap";
import PasscodeInput from "./PasscodeInput";
import { scale } from "../Helpers";
//react loading
import ReactLoading from "react-loading";

function App() {
    const [users, setUsers] = useState([]);

    const [passcode, setPasscode] = useState(null);
    const [passcodeFlag, setPasscodeFlag] = useState(false);
    const [passcodeValidation, setPasscodeValidation] = useState(true);

    const usersCollectionRef = collection(db, "users");

    // const [loading, setLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    //images state
    const [imageUrl, setImageUrl] = useState("");

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

    //delete user
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);

        await deleteDoc(userDoc);
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
                                    <td colSpan={9}>
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

    const getInvoice = (userId) => {
        const imageRef = ref(storage, `invoices/${userId}`);
        getDownloadURL(imageRef).then((url) => {
            console.log(url);
            setImageUrl(url);
        });
    };

    getInvoice("ozQGfhGGHCIVyFM3DxMh");

    const renderParticipants = () => {
        if (users.length > 0) {
            return users.map((user) => (
                <tr className="align-middle" key={user.id}>
                    <td>{counter++}</td>
                    <td>{user.timestamp.toDate().toLocaleString()}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.racquets}</td>
                    <td>{user.level}</td>
                    <td>
                        <img src={imageUrl} alt={`${user.name} invoice`} />
                    </td>
                    <td>{user.paid ? "Paid" : "Unpaid"}</td>
                    <td>
                        <Button
                            onClick={() => updateUser(user.id, user.paid)}
                            variant={user.paid ? "dark" : "success"}
                        >
                            {user.paid ? "Unpaid" : "Paid"}
                        </Button>
                        <Button onClick={() => deleteUser(user.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            ));
        } else {
            return (
                <tr className="align-middle text-center">
                    <td colSpan={9}>No participants found</td>
                </tr>
            );
        }
    };

    return (
        <div className="App">
            <Container className="participants-container">
                <div className="row justify-content-center">
                    {renderElements()}
                </div>
            </Container>
        </div>
    );
}

export default App;
