import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { actions as taskActions } from "../store/ducks/taskDuck";

const initialState = {
  title: "",
  description: "",
  severity: "",
  description: "",
  user: {},
};

export default function NewTaskForm(props) {
  const { addTaskActive, setAddTaskActive } = props;
  const [newTask, setNewTask] = useState(initialState);
  const activeUser = useSelector((state) => state.user.activeUser);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setAddTaskActive(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(taskActions.postTaskThunk({ ...newTask, user: activeUser }));
    setNewTask(initialState);
    setAddTaskActive(false);
  };

  return (
    <Modal show={addTaskActive} onHide={handleModalClose}>
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
              Mood
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="mood"
                value={newTask.mood}
                placeholder="Mood"
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
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
