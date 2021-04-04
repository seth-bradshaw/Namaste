import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { actions as taskActions } from "../store/ducks/taskDuck";

const initialState = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  severity: "",
  user: {},
};

export default function TaskForm(props) {
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
    dispatch(
      taskActions.postTaskThunk({
        ...newTask,
        user: activeUser,
      })
    );
    setNewTask(initialState);
    setTimeout(() => closeAddModal(), 100);
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
              Start Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="startDate"
                value={newTask.startDate}
                onChange={(e) => handleChange(e)}
                placeholder="Please enter in format MM-DD-YYYY"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalMood">
            <Form.Label column sm={2}>
              End Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="endDate"
                value={newTask.endDate}
                onChange={(e) => handleChange(e)}
                placeholder="Please enter in format MM-DD-YYYY"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalMood">
            <Form.Label column sm={2}>
              Start Time
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="startTime"
                value={newTask.startTime}
                onChange={(e) => handleChange(e)}
                placeholder="Only enter the hour"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalMood">
            <Form.Label column sm={2}>
              End Time
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="endTime"
                value={newTask.endTime}
                onChange={(e) => handleChange(e)}
                placeholder="Only enter the hour"
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
      </Modal.Footer>
    </Modal>
  );
}
