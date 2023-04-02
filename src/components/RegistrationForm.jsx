import { useState, useEffect } from "react";
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Button, Container, Form } from "react-bootstrap";
import FormDetails from "./FormDetails";

import { useNavigate } from "react-router";

const RegistrationForm = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        racquets: "Yes",
        level: "beginner",
        paid: false,
    });

    const usersCollectionRef = collection(db, "users");

    const updateData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    //add user
    const addUser = async (e) => {
        e.preventDefault();
        //getting data of submitted form
        console.log(data);
        await addDoc(usersCollectionRef, { data });

        navigate("/confirmation", { state: { data } });
    };

    //update user to update the paid fields (next dev)
    // const updateUser = async (id) => {
    //     const userDoc = doc(db, "users", id);
    //     const paid = { paid: !paid };
    //     await updateDoc(userDoc, paid);
    // };
    return (
        <>
            {/* <a className="btn btn-link" href="login.html">
                Log In (Admin)
            </a>
            <a className="btn btn-link" href="index.html">
                Registration Form
            </a>
            <a className="btn btn-link" href="participants.html">
                {" "}
                Participants{" "}
            </a> */}
            {/* <button className="btn toggle">Dark Mode</button> */}
            <Container>
                <Form onSubmit={addUser}>
                    <FormDetails />
                    <hr></hr>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="required">Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter name"
                            required
                            onChange={updateData}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="required">
                            Email address
                        </Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            required
                            onChange={updateData}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label className="required">
                            Phone Number
                        </Form.Label>
                        <Form.Control
                            name="phone"
                            type="number"
                            placeholder="Enter phone number"
                            required
                            onChange={updateData}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your contact with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="racquets">
                        <Form.Label className="required">
                            Can you bring your own racquets?
                        </Form.Label>
                        <div className="mb-3">
                            <Form.Check inline required>
                                <Form.Check.Input
                                    type={"radio"}
                                    name="racquets"
                                    onChange={updateData}
                                    value="Yes"
                                    required
                                />
                                <Form.Check.Label className="custom-radio">
                                    Yes
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check inline>
                                <Form.Check.Input
                                    type={"radio"}
                                    name="racquets"
                                    onChange={updateData}
                                    value="No"
                                    required
                                />
                                <Form.Check.Label className="custom-radio">
                                    No
                                </Form.Check.Label>
                            </Form.Check>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="level">
                        <Form.Label>Your level</Form.Label>
                        <Form.Select
                            name="level"
                            className="mb-3"
                            controlId="level"
                            onChange={updateData}
                        >
                            <option value="beginner" selected>
                                Beginner
                            </option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </Form.Select>
                    </Form.Group>

                    {/* file upload here in the future  */}
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default RegistrationForm;
