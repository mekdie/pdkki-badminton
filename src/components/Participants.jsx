import { useState, useEffect } from "react";
import {
    collection,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

import { Container, Table, Button } from "react-bootstrap";
function App() {
    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        // console.log(data.docs[0].data());
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    useEffect(() => {
        // reference:
        // https://firebase.google.com/docs/firestore/query-data/get-data

        getUsers();
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

    return (
        <div className="App">
            <Container className="participants-container">
                <div class="row justify-content-center">
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Racquets</th>
                                <th>Level</th>
                                <th>Payment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr className="align-middle" key={user.id}>
                                    <td>{counter++}</td>
                                    <td>
                                        {user.timestamp
                                            .toDate()
                                            .toLocaleString()}
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.racquets}</td>
                                    <td>{user.level}</td>
                                    <td>{user.paid ? "Paid" : "Unpaid"}</td>
                                    <td>
                                        <Button
                                            onClick={() =>
                                                updateUser(user.id, user.paid)
                                            }
                                            variant={
                                                user.paid ? "dark" : "success"
                                            }
                                        >
                                            {user.paid ? "Unpaid" : "Paid"}
                                        </Button>
                                        <Button
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}

export default App;
