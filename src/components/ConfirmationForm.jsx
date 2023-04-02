import React from "react";
import { Form, Container } from "react-bootstrap";

const ConfirmationForm = () => {
    return (
        <div>
            <Container>
                <Form>
                    {" "}
                    <h3>PDKKI Badminton Registration &#127992;</h3>
                    <hr />
                    <div class="vHW8K">
                        Thank you for RSVP :)
                        <br />
                        <br />
                        Don't forget to make the payment to:
                        <br />
                        BSB: XXXXXX
                        <br />
                        Acc: XXXXXX
                        <br />
                        Description: Name - Antman
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
    );
};

export default ConfirmationForm;
