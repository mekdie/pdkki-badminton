import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const RegistrationForm = () => {
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
                <Form>
                    <h3>PDKKI Badminton Registration &#127992;</h3>
                    <hr />
                    <div className="N0gd6">
                        <div className="ahS2Le">
                            <div
                                className="F9yp7e ikZYwf LgNcQe"
                                dir="auto"
                                role="heading"
                                aria-level="1"
                            >
                                PDKKI Movie Night 25 February 2023
                            </div>
                        </div>
                        <div className="cBGGJ OIC90c" dir="auto">
                            It’s time to pop the corn! 💥🍿
                            <br />
                            Join us in taking a journey to the quantum realm 🫧
                            <br />
                            <br />
                            PDKKI invites you to our first movie night of the
                            year: <br />
                            <span style={{ fontWeight: 700 }}>
                                Ant-Man and the Wasp: Quantumania
                            </span>
                            🐜
                            <div>
                                <br />
                                📅 Saturday, 25 February
                                <br />⏱ 6.30pm
                                <br />
                                📍 HOYTS Melbourne Central
                                <br />
                                <div>
                                    Cnr Swanston &amp;, La Trobe St, Melbourne
                                    VIC 3000 (Level 3)
                                </div>
                                <div>
                                    <br />
                                    Fee: $23 (adult) // $20 (student)
                                    <br />
                                </div>
                                <div>
                                    <br />
                                </div>
                                <div>
                                    Latest RSVP by Friday, 24 February&nbsp;
                                    <i>(or until sold out).</i>
                                </div>
                                <div>
                                    <br />
                                </div>
                                <div>
                                    Transfer can be made to:
                                    <br />
                                    BSB: XXXXXX
                                    <br />
                                    Acc: XXXX XXXX
                                    <br />
                                    Description: Name - Antman
                                    <br />
                                </div>
                                <div>
                                    <br />
                                </div>
                                <div>
                                    Send receipt to: PDKKI Instagram
                                    (@pdkkimelbourne)
                                    <div>
                                        <i>Follow us if you haven't! ;)</i>
                                    </div>
                                </div>
                                <div>
                                    <i>
                                        <br />
                                    </i>
                                </div>
                                <div>
                                    <div>
                                        If you have any questions, please feel
                                        free to reach out to us or our contact
                                        person.
                                    </div>
                                    <div>💁🏻‍♀: Anonymous</div>
                                </div>
                                <div>
                                    <b>
                                        <br />
                                    </b>
                                    <div>
                                        Looking forward to travel the quantum
                                        realm together😎
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="required">Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="required">
                            Email address
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label className="required">
                            Phone Number
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter phone number"
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your contact with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="racquets">
                        <Form.Label>
                            Can you bring your own racquets?
                        </Form.Label>
                        <div className="mb-3">
                            <Form.Check inline name="racquets" type="radio">
                                <Form.Check.Input type={"radio"} checked />
                                <Form.Check.Label className="custom-radio">
                                    Yes
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check inline name="racquets">
                                <Form.Check.Input type={"radio"} />
                                <Form.Check.Label className="custom-radio">
                                    No
                                </Form.Check.Label>
                            </Form.Check>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="racquets">
                        <Form.Label>Your level</Form.Label>
                        <Form.Select className="mb-3" controlId="level">
                            <option value="beginner">Beginner</option>
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
