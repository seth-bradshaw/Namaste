import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { actions as taskActions } from "../store/ducks/taskDuck";

export default function TaskModal(props) {
  const { modalViewActive, closeViewModal } = props;
  const task = useSelector((state) => state.task.task);
  const dispatch = useDispatch();

  return (
    <Modal show={modalViewActive} onHide={() => closeViewModal()}>
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
