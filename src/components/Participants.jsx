import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

import { Container, Table } from "react-bootstrap";
function App() {
    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        // reference:
        // https://firebase.google.com/docs/firestore/query-data/get-data
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            // console.log(data.docs[0].data());
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    let counter = 1;

    return (
        <div className="App">
            <Container className="participants-container">
                <div class="row justify-content-center">
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
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
                                <tr key={user.id}>
                                    <td>{counter++}</td>
                                    <td>{user.data.name}</td>
                                    <td>{user.data.email}</td>
                                    <td>{user.data.phone}</td>
                                    <td>{user.data.racquets}</td>
                                    <td>{user.data.level}</td>
                                    <td>
                                        {user.data.paid ? "Paid" : "Unpaid"}
                                    </td>
                                    <td>TBA v1.x</td>
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
