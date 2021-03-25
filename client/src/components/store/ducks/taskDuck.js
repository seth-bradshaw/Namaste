import {
  getTasksByUserId,
  getTaskById,
  addNewTask,
  editTaskById,
  deleteTaskById,
} from "../../utils/otherAxiosCalls";

export const types = {
  GET_TASKS_START: "GET_TASKS_START",
  GET_TASKS_SUCCESS: "GET_TASKS_SUCCESS",
  GET_TASKS_ERROR: "GET_TASKS_ERROR",
  GET_TASKS_RESOLVE: "GET_TASKS_RESOLVE",
  GET_TASK_START: "GET_TASK_START",
  GET_TASK_SUCCESS: "GET_TASK_SUCCESS",
  GET_TASK_ERROR: "GET_TASK_ERROR",
  GET_TASK_RESOLVE: "GET_TASK_RESOLVE",
  POST_TASK_START: "POST_TASK_START",
  POST_TASK_SUCCESS: "POST_TASK_SUCCESS",
  POST_TASK_ERROR: "POST_TASK_ERROR",
  POST_TASK_RESOLVE: "POST_TASK_RESOLVE",
  PUT_TASK_START: "PUT_TASK_START",
  PUT_TASK_SUCCESS: "PUT_TASK_SUCCESS",
  PUT_TASK_ERROR: "PUT_TASK_ERROR",
  PUT_TASK_RESOLVE: "PUT_TASK_RESOLVE",
  DELETE_TASK_START: "DELETE_TASK_START",
  DELETE_TASK_SUCCESS: "DELETE_TASK_SUCCESS",
  DELETE_TASK_ERROR: "DELETE_TASK_ERROR",
  DELETE_TASK_RESOLVE: "DELETE_TASK_RESOLVE",
  SET_TASK_ACTIVE: "SET_TASK_ACTIVE",
};
export const actions = {
  getTasksThunk: (userId) => (dispatch) => {
    dispatch({ type: types.GET_TASKS_START });
    getTasksByUserId(userId)
      .then((res) => {
        dispatch({ type: types.GET_TASKS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_TASKS_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_TASKS_RESOLVE });
      });
  },
  getTaskThunk: (taskId) => (dispatch) => {
    dispatch({ type: types.GET_TASK_START });
    getTaskById(taskId)
      .then((res) => {
        dispatch({ type: types.GET_TASK_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_TASK_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_TASK_RESOLVE });
      });
  },
  postTaskThunk: (newTask) => (dispatch) => {
    dispatch({ type: types.POST_TASK_START });
    addNewTask(newTask)
      .then((res) => {
        dispatch({ type: types.POST_TASK_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.POST_TASK_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.POST_TASK_RESOLVE });
      });
  },
  putTaskThunk: (taskId, editedTask) => (dispatch) => {
    dispatch({ type: types.PUT_TASK_START });
    editTaskById(taskId, editedTask)
      .then((res) => {
        dispatch({ type: types.PUT_TASK_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.PUT_TASK_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.PUT_TASK_RESOLVE });
      });
  },
  deleteTaskThunk: (taskId) => (dispatch) => {
    dispatch({ type: types.DELETE_TASK_START });
    deleteTaskById(taskId)
      .then((res) => {
        dispatch({ type: types.DELETE_TASK_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.DELETE_TASK_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.DELETE_TASK_RESOLVE });
      });
  },
  setTaskActiveThunk: (task) => (dispatch) => {
    dispatch({ type: types.SET_TASK_ACTIVE, payload: task });
  },
};

const taskInitialState = {
  tasks: [],
  task: {},
  status: "idle",
  error: "",
};

const taskReducer = (state = taskInitialState, action) => {
  switch (action.type) {
    case types.GET_TASKS_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_TASKS_SUCCESS:
      return {
        ...state,
        status: "get/success",
        tasks: action.payload,
      };
    case types.GET_TASKS_ERROR:
      return {
        ...state,
        status: "get/error",
        error: action.payload,
      };
    case types.GET_TASKS_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.GET_TASK_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_TASK_SUCCESS:
      return {
        ...state,
        status: "get/success",
        task: action.payload,
      };
    case types.GET_TASK_ERROR:
      return {
        ...state,
        status: "get/error",
        error: action.payload,
      };
    case types.GET_TASK_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.POST_TASK_START:
      return {
        ...state,
        status: "post/pending",
      };
    case types.POST_TASK_SUCCESS:
      console.log("SUCCESS");
      return {
        ...state,
        status: "post/success",
      };
    case types.POST_TASK_ERROR:
      return {
        ...state,
        status: "post/error",
        error: action.payload,
      };
    case types.POST_TASK_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.PUT_TASK_START:
      return {
        ...state,
        status: "put/pending",
      };
    case types.PUT_TASK_SUCCESS:
      return {
        ...state,
        status: "put/success",
      };
    case types.PUT_TASK_ERROR:
      return {
        ...state,
        status: "put/error",
        error: action.payload,
      };
    case types.PUT_TASK_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.DELETE_TASK_START:
      return {
        ...state,
        status: "delete/pending",
      };
    case types.DELETE_TASK_SUCCESS:
      return {
        ...state,
        status: "delete/success",
      };
    case types.DELETE_TASK_ERROR:
      return {
        ...state,
        status: "delete/error",
        error: action.payload,
      };
    case types.DELETE_TASK_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.SET_TASK_ACTIVE:
      return {
        ...state,
        task: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
