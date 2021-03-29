import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { actions as taskActions } from "../../store/ducks/taskDuck";

const initialState = {
  title: "",
  description: "",
  date: "",
  startTime: "",
  endTime: "",
  severity: "",
  user: {},
};

export default function TestTaskForm(props) {
  const { modalAddActive, closeAddModal } = props;
  const [newTask, setNewTask] = useState(initialState);
  const activeUser = useSelector((state) => state.user.activeUser);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
    console.log(newTask);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateArray = newTask.date.split("/");
    const dateObj = {
      year: 0,
      month: 0,
      day: 0,
      startTime: 0,
      endTime: 0,
    };
    for (let x = 0; x < dateArray.length; x++) {
      if (x === 0) {
        dateObj.year = parseInt(dateArray[0]);
      } else if (x === 1) {
        dateObj.month = parseInt(dateArray[1]);
      } else {
        dateObj.day = parseInt(dateArray[2]);
      }
    }

    const saveObj = {
      title: newTask.title,
      description: newTask.description,
      severity: newTask.severity,
      taskDate: {
        ...dateObj,
        startTime: newTask.startTime,
        endTime: newTask.endTime,
      },
      user: activeUser,
    };

    console.log(saveObj);

    dispatch(taskActions.postTaskThunk(saveObj));
    setNewTask(initialState);
    setTimeout(() => closeAddModal(), 30);
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
              Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="date"
                value={newTask.date}
                onChange={(e) => handleChange(e)}
                placeholder="Please enter in format YYYY/MM/DD"
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
