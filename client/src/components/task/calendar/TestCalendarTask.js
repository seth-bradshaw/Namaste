import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function TestCalendarTask(props) {
  const { show, closeViewModal } = props;
  const task = useSelector((state) => state.task.task);

  return (
    <Modal show={show} onHide={() => closeViewModal()}>
      <Modal.Header closeButton>
        <Modal.Title>{task.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{task.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeViewModal()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => closeViewModal()}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
