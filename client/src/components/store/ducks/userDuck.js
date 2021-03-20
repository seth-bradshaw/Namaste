import {
  login,
  signUp,
  getActiveUser,
  editUserById,
  deleteUserById,
} from "../../utils/otherAxiosCalls";

export const types = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN_RESOLVE: "LOGIN_RESOLVE",
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_ERROR: "SIGN_UP_ERROR",
  SIGN_UP_RESOLVE: "SIGN_UP_RESOLVE",
  GET_USER_START: "GET_USER_START",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_ERROR: "GET_USER_ERROR",
  GET_USER_RESOLVE: "GET_USER_RESOLVE",
  PUT_USER_START: "PUT_USER_START",
  PUT_USER_SUCCESS: "PUT_USER_SUCCESS",
  PUT_USER_ERROR: "PUT_USER_ERROR",
  PUT_USER_RESOLVE: "PUT_USER_RESOLVE",
  DELETE_USER_START: "DELETE_USER_START",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_ERROR: "DELETE_USER_ERROR",
  DELETE_USER_RESOLVE: "DELETE_USER_RESOLVE",
};

export const actions = {
  loginThunk: (credentials) => (dispatch) => {
    dispatch({ type: types.LOGIN_START });
    login(credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: types.LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.LOGIN_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.LOGIN_RESOLVE });
      });
  },
  signUpThunk: (newUser) => (dispatch) => {
    dispatch({ type: types.SIGN_UP_START });
    signUp(newUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: types.SIGN_UP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.SIGN_UP_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.SIGN_UP_RESOLVE });
      });
  },
  getUserThunk: () => (dispatch) => {
    dispatch({ type: types.GET_USER_START });
    getActiveUser()
      .then((res) => {
        dispatch({ type: types.GET_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_USER_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_USER_RESOLVE });
      });
  },
  putUserThunk: (userId, editedUser) => (dispatch) => {
    dispatch({ type: types.PUT_USER_START });
    editUserById(userId, editedUser)
      .then((res) => {
        dispatch({ type: types.PUT_USER_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.PUT_USER_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.PUT_USER_RESOLVE });
      });
  },
  deleteUserThunk: (userId) => (dispatch) => {
    dispatch({ type: types.DELETE_USER_START });
    deleteUserById(userId)
      .then((res) => {
        dispatch({ type: types.DELETE_USER_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.DELETE_USER_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.DELETE_USER_RESOLVE });
      });
  },
};

const userInitialState = {
  activeUser: {},
  status: "idle",
  error: "",
  loggedIn: false,
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        status: "auth/pending",
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        status: "auth/success",
        loggedIn: true,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        status: "auth/error",
        error: action.payload,
      };
    case types.LOGIN_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.SIGN_UP_START:
      return {
        ...state,
        status: "auth/pending",
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        status: "auth/success",
        loggedIn: true,
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        status: "auth/error",
        error: action.payload,
      };
    case types.SIGN_UP_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.GET_USER_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        status: "get/success",
        activeUser: action.payload,
      };
    case types.GET_USER_ERROR:
      return {
        ...state,
        status: "get/error",
        error: action.payload,
      };
    case types.GET_USER_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.PUT_USER_START:
      return {
        ...state,
        status: "put/pending",
      };
    case types.PUT_USER_SUCCESS:
      return {
        ...state,
        status: "put/success",
      };
    case types.PUT_USER_ERROR:
      return {
        ...state,
        status: "put/error",
        error: action.payload,
      };
    case types.PUT_USER_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.DELETE_USER_START:
      return {
        ...state,
        status: "delete/pending",
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        status: "delete/success",
      };
    case types.DELETE_USER_ERROR:
      return {
        ...state,
        status: "delete/error",
        error: action.payload,
      };
    case types.DELETE_USER_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    default:
      return state;
  }
};
