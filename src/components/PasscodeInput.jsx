import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useRef } from "react";

function PasscodeInput({ onSubmit, wrongPasscode }) {
    const passcodeRef = useRef(undefined);

    return (
        <Form onSubmit={(e) => onSubmit(e, passcodeRef.current.value)}>
            <Stack
                style={{ marginBottom: "0.5rem" }}
                direction="horizontal"
                gap={2}
            >
                <Form.Control
                    className="me-auto"
                    placeholder="Enter passcode to access this page..."
                    ref={passcodeRef}
                />
                <Button type="submit" variant="secondary">
                    Submit
                </Button>
                {/* <div className="vr" /> */}
                {/* <Button variant="outline-danger">Reset</Button> */}
            </Stack>
            {!wrongPasscode && (
                <Form.Text style={{ color: "red" }}>
                    Please enter a valid passcode
                </Form.Text>
            )}
        </Form>
    );
}

export default PasscodeInput;
