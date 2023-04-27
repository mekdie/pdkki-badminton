import React from "react";
import { Form, Container } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";

import { Table } from "react-bootstrap";
const ConfirmationForm = () => {
    const location = useLocation();

    return location.state ? (
        <div>
            <Container>
                <Form>
                    {" "}
                    <h3>PDKKI Badminton Registration &#127992;</h3>
                    <hr />
                    <div>
                        Thank you for RSVP :) Your submitted form: <br />
                        <br />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <b>Value</b>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Name</b>
                                    </td>
                                    <td>{location.state.data.name}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Email</b>
                                    </td>
                                    <td>{location.state.data.email}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Phone Number</b>
                                    </td>
                                    <td>{location.state.data.phone}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Racquets</b>
                                    </td>
                                    <td>{location.state.data.racquets}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Level</b>
                                    </td>
                                    <td>{location.state.data.level}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <br />
                        Don't forget to make the payment to:
                        <br />
                        BSB: XXXXXX
                        <br />
                        Acc: XXXXXX
                        <br />
                        Description: Name - BadmintonPD
                        <br />
                        And please send the proof of PDKKI Instagram
                        (@pdkkimelbourne).
                        <br />
                        <br />
                        We will gather at 4.45 pm on the day in front of HOYTS
                        Melcen entrance located on level 3. Look for who you
                        arrive!
                        <br />
                        <br />
                        See you all! :)
                    </div>
                </Form>
            </Container>
        </div>
    ) : (
        <Navigate to="/" />
    );
};

export default ConfirmationForm;
