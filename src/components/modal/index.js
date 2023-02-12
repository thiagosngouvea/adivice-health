import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalCentralizado(props) {
    // const [modalShow, setModalShow] = useState(false);

    console.log('modalShow',props);
    console.log('modalShow22222',props.showModal);
    const handleCloseModal = () => {
        props.closeModal(false);
    }

  return (
    <Modal
      show={props.showModal}
      onHide={handleCloseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.description}</h4>
        <div>
            {props.content}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

