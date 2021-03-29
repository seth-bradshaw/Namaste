import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { actions as taskActions } from "../../store/ducks/taskDuck";
import { Button } from "react-bootstrap";
import TestCalendarTask from "./TestCalendarTask";
import TestTaskForm from "./TestTaskForm";
import useModal from "../../hooks/useModal";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
];

export default function TestCalendar() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [modalAddActive, openAddModal, closeAddModal] = useModal();
  const tasks = useSelector((state) => state.task.tasks);
  const task = useSelector((state) => state.task.task);
  const activeUser = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    dispatch(taskActions.getTasksThunk(activeUser.userId));
  }, [modalAddActive]);

  const onTaskClick = (data) => {
    console.log(data);
    dispatch(taskActions.setTaskActiveThunk(data.task));
    setTimeout(() => setShow(true), 30);
  };

  const closeViewModal = () => {
    setShow(false);
  };

  const myEventsListTry = tasks.map((tsk) => {
    return {
      start: new Date(
        tsk.taskDate.year,
        tsk.taskDate.month - 1,
        tsk.taskDate.day,
        tsk.taskDate.startTime
      ),
      end: new Date(
        tsk.taskDate.year,
        tsk.taskDate.month - 1,
        tsk.taskDate.day,
        tsk.taskDate.endTime
      ),
      title: tsk.title,
      task: tsk,
    };
  });

  return (
    <div style={{ margin: "2% auto", width: "80%" }}>
      {show ? (
        <TestCalendarTask show={show} closeViewModal={closeViewModal} />
      ) : (
        <></>
      )}
      {modalAddActive ? (
        <TestTaskForm
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
