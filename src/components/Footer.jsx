import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer bg-light py-3">
            <Container className="footer-content">
                <p className="text-muted">
                    Copyright © 2023 McDony Lee -{" "}
                    <FontAwesomeIcon icon={faGithub} color="black" />{" "}
                    <a
                        className="btn-link"
                        href="https://github.com/mekdie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mekdie
                    </a>{" "}
                    <span className="text-nowrap">
                        All rights reserved. - Version 1.4.2 Alpha
                    </span>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
