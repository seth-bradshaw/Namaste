import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { actions as taskActions } from "../store/ducks/taskDuck";
import { Button } from "react-bootstrap";
import SingleTask from "./SingleTask";
import TaskForm from "./TaskForm";
import useModal from "../hooks/useModal";
import "react-big-calendar/lib/css/react-big-calendar.css";

// moment.locale = "en-US";
const localizer = momentLocalizer(moment);

const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
];

export default function TaskCalendar() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [modalAddActive, openAddModal, closeAddModal] = useModal();
  const tasks = useSelector((state) => state.task.tasks);
  const task = useSelector((state) => state.task.task);
  const activeUser = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    dispatch(taskActions.getTasksThunk(activeUser.userId));
  }, [modalAddActive]);

  console.log({ moment });

  const onTaskClick = (data) => {
    dispatch(taskActions.setTaskActiveThunk(data.task));
    setTimeout(() => setShow(true), 30);
  };

  const closeViewModal = () => {
    setShow(false);
  };

  const myEventsListTry = tasks.map((tsk) => {
    const startDateArr = tsk.startDate.split("-");
    const endDateArr = tsk.endDate.split("-");

    return {
      start: new Date(
        parseInt(startDateArr[2]),
        parseInt(startDateArr[0]) - 1,
        parseInt(startDateArr[1]),
        parseInt(tsk.startTime)
      ),
      end: new Date(
        parseInt(endDateArr[2]),
        parseInt(endDateArr[0]) - 1,
        parseInt(endDateArr[1]),
        parseInt(tsk.endTime)
      ),
      title: tsk.title,
      task: tsk,
    };
  });

  return (
    <div style={{ margin: "2% auto", width: "80%" }}>
      {show ? (
        <SingleTask show={show} closeViewModal={closeViewModal} />
      ) : (
        <></>
      )}
      {modalAddActive ? (
        <TaskForm
          modalAddActive={modalAddActive}
          closeAddModal={closeAddModal}
        />
      ) : (
        <></>
      )}
      <Calendar
        localizer={localizer}
        events={myEventsListTry}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 500,
          fontFamily: "Poppins",
        }}
        onSelectEvent={(data) => onTaskClick(data)}
      />
      <Button
        onClick={() => openAddModal()}
        style={{
          margin: "2% auto",
          backgroundColor: "#FE6E00",
          borderColor: "#FE6E00",
        }}
      >
        Add New Task
      </Button>
    </div>
  );
}
