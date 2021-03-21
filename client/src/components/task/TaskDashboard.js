import React, { useEffect, useState } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions as userActions } from "../store/ducks/userDuck";
import { actions as taskActions } from "../store/ducks/taskDuck";
import NewTaskForm from "./NewTaskForm";
import TaskBar from "./TaskBar";
import TaskModal from "./TaskModal";

export default function TaskDashboard() {
  const [modalActive, setModalActive] = useState(false);
  const [addTaskActive, setAddTaskActive] = useState(false);
  const activeUser = useSelector((state) => state.user.activeUser);
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskActions.getTasksThunk(activeUser.userId));
  }, []);

  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <div>
      {modalActive ? (
        <TaskModal
          modalActive={modalActive}
          handleModalClose={handleModalClose}
        ></TaskModal>
      ) : (
        <></>
      )}
      {addTaskActive ? (
        <NewTaskForm
          addTaskActive={addTaskActive}
          setAddTaskActive={setAddTaskActive}
        />
      ) : (
        <></>
      )}
      {tasks.map((tsk) => {
        return (
          <span onClick={() => dispatch(taskActions.setTaskActiveThunk(tsk))}>
            <TaskBar setModalActive={setModalActive} task={tsk}></TaskBar>
          </span>
        );
      })}
      <div onClick={() => setAddTaskActive(true)}>
        <p>Add New Task</p>
      </div>
    </div>
  );
}
