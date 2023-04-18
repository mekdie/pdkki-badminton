import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({ showModal, onHide, confirm, message, title }) => {
    return (
        <Modal show={showModal} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="alert alert-danger">{message}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={confirm}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;
