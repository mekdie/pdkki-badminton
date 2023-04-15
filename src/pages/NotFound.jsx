import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFound = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center align-items-center">
                <Col lg={8} md={10} sm={12}>
                    <h1 className="text-center display-1 font-weight-bold mb-4">
                        404 - Not Found
                    </h1>
                    <p className="text-center lead mb-5">
                        We're sorry, the page you requested could not be found.
                    </p>
                    <div className="text-center">
                        <Button variant="primary" as={Link} to="/">
                            Go to Home
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
