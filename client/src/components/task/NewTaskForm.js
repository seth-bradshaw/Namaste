import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { actions as taskActions } from "../store/ducks/taskDuck";

const initialState = {
  title: "",
  description: "",
  severity: "",
  user: {},
};

export default function NewTaskForm(props) {
  const { modalAddActive, closeAddModal } = props;
  const [newTask, setNewTask] = useState(initialState);
  const activeUser = useSelector((state) => state.user.activeUser);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(taskActions.postTaskThunk({ ...newTask, user: activeUser }));
    setNewTask(initialState);
    setTimeout(function () {
      closeAddModal();
    }, 30);
  };

  return (
    <Modal show={modalAddActive} onHide={closeAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>

      <div style={{ width: "95%", margin: "auto" }}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="title"
                value={newTask.title}
                placeholder="Title"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalMood">
            <Form.Label column sm={2}>
              Severity
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="severity"
                value={newTask.severity}
                onChange={(e) => handleChange(e)}
                placeholder="Severity"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as={"textarea"}
                placeholder="Description"
                name="description"
                value={newTask.description}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeAddModal}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Add
        </Button>
        {/* {isTaskAdded === false ? (
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Add
          </Button>
        ) : (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        )} */}
      </Modal.Footer>
    </Modal>
  );
}
