import { useState, useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
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

    return (
        <div className="App">
            {" "}
            {users.map((user) => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
