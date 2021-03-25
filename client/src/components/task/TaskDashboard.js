import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions as taskActions } from "../store/ducks/taskDuck";
import NewTaskForm from "./NewTaskForm";
import TaskBar from "./TaskBar";
import TaskModal from "./TaskModal";
import useModal from "../hooks/useModal";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";

function TaskDashboard() {
  const [modalViewActive, openViewModal, closeViewModal] = useModal();
  const [modalAddActive, openAddModal, closeAddModal] = useModal();
  const activeUser = useSelector((state) => state.user.activeUser);
  const { tasks, status } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskActions.getTasksThunk(activeUser.userId));
  }, []);

  useEffectAfterMount(() => {
    dispatch(taskActions.getTasksThunk(activeUser.userId));
  }, [modalAddActive]);

  return (
    <div>
      {modalViewActive ? (
        <TaskModal
          modalViewActive={modalViewActive}
          closeViewModal={closeViewModal}
        ></TaskModal>
      ) : (
        <></>
      )}
      {modalAddActive ? (
        <NewTaskForm
          modalAddActive={modalAddActive}
          closeAddModal={closeAddModal}
        />
      ) : (
        <></>
      )}
      {tasks.map((tsk) => {
        return (
          <span onClick={() => dispatch(taskActions.setTaskActiveThunk(tsk))}>
            <TaskBar openViewModal={openViewModal} task={tsk}></TaskBar>
          </span>
        );
      })}
      <div onClick={() => openAddModal()}>
        <p>Add New Task</p>
      </div>
    </div>
  );
}

export default TaskDashboard;
