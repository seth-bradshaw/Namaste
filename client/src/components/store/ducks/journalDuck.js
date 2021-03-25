import {
  getJournalsByUserId,
  getJournalById,
  addNewJournal,
  editJournalById,
  deleteJournalById,
} from "../../utils/otherAxiosCalls";

export const types = {
  GET_JOURNALS_START: "GET_JOURNALS_START",
  GET_JOURNALS_SUCCESS: "GET_JOURNALS_SUCCESS",
  GET_JOURNALS_ERROR: "GET_JOURNALS_ERROR",
  GET_JOURNALS_RESOLVE: "GET_JOURNALS_RESOLVE",
  GET_JOURNAL_START: "GET_JOURNAL_START",
  GET_JOURNAL_SUCCESS: "GET_JOURNAL_SUCCESS",
  GET_JOURNAL_ERROR: "GET_JOURNAL_ERROR",
  GET_JOURNAL_RESOLVE: "GET_JOURNAL_RESOLVE",
  POST_JOURNAL_START: "POST_JOURNAL_START",
  POST_JOURNAL_SUCCESS: "POST_JOURNAL_SUCCESS",
  POST_JOURNAL_ERROR: "POST_JOURNAL_ERROR",
  POST_JOURNAL_RESOLVE: "POST_JOURNAL_RESOLVE",
  PUT_JOURNAL_START: "PUT_JOURNAL_START",
  PUT_JOURNAL_SUCCESS: "PUT_JOURNAL_SUCCESS",
  PUT_JOURNAL_ERROR: "PUT_JOURNAL_ERROR",
  PUT_JOURNAL_RESOLVE: "PUT_JOURNAL_RESOLVE",
  DELETE_JOURNAL_START: "DELETE_JOURNAL_START",
  DELETE_JOURNAL_SUCCESS: "DELETE_JOURNAL_SUCCESS",
  DELETE_JOURNAL_ERROR: "DELETE_JOURNAL_ERROR",
  DELETE_JOURNAL_RESOLVE: "DELETE_JOURNAL_RESOLVE",
  SET_JOURNAL_ACTIVE: "SET_JOURNAL_ACTIVE",
};

export const actions = {
  getJournalsThunk: (userId) => (dispatch) => {
    dispatch({ type: types.GET_JOURNALS_START });
    getJournalsByUserId(userId)
      .then((res) => {
        dispatch({ type: types.GET_JOURNALS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_JOURNALS_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_JOURNALS_RESOLVE });
      });
  },
  getJournalThunk: (journalId) => (dispatch) => {
    dispatch({ type: types.GET_JOURNAL_START });
    getJournalById(journalId)
      .then((res) => {
        dispatch({ type: types.GET_JOURNAL_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_JOURNAL_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_JOURNAL_RESOLVE });
      });
  },
  postJournalThunk: (newJournal) => (dispatch) => {
    dispatch({ type: types.GET_JOURNAL_START });
    addNewJournal(newJournal)
      .then((res) => {
        dispatch({ type: types.GET_JOURNAL_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.GET_JOURNAL_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_JOURNAL_RESOLVE });
      });
  },
  putJournalThunk: (journalId, editedJournal) => (dispatch) => {
    dispatch({ type: types.PUT_JOURNAL_START });
    editJournalById(journalId, editedJournal)
      .then((res) => {
        dispatch({ type: types.PUT_JOURNAL_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.PUT_JOURNAL_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.PUT_JOURNAL_RESOLVE });
      });
  },
  deleteJournalThunk: (journalId) => (dispatch) => {
    dispatch({ type: types.DELETE_JOURNAL_START });
    deleteJournalById(journalId)
      .then((res) => {
        dispatch({ type: types.DELETE_JOURNAL_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.DELETE_JOURNAL_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.DELETE_JOURNAL_RESOLVE });
      });
  },
  setJournalActiveThunk: (journal) => (dispatch) => {
    dispatch({ type: types.SET_JOURNAL_ACTIVE, payload: journal });
  },
};

const journalInitialState = {
  journals: [],
  journal: {},
  status: "idle",
  error: "",
};

const journalReducer = (state = journalInitialState, action) => {
  switch (action.type) {
    case types.GET_JOURNALS_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_JOURNALS_SUCCESS:
      return {
        ...state,
        status: "get/success",
        journals: action.payload,
      };
    case types.GET_JOURNALS_ERROR:
      return {
        ...state,
        status: "get/error",
        error: action.payload,
      };
    case types.GET_JOURNALS_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.GET_JOURNAL_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_JOURNAL_SUCCESS:
      return {
        ...state,
        status: "get/success",
        journal: action.payload,
      };
    case types.GET_JOURNAL_ERROR:
      return {
        ...state,
        status: "get/error",
        error: action.payload,
      };
    case types.GET_JOURNAL_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.POST_JOURNAL_START:
      return {
        ...state,
        status: "post/pending",
      };
    case types.POST_JOURNAL_SUCCESS:
      return {
        ...state,
        status: "post/success",
      };
    case types.POST_JOURNAL_ERROR:
      return {
        ...state,
        status: "post/error",
        error: action.payload,
      };
    case types.POST_JOURNAL_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.PUT_JOURNAL_START:
      return {
        ...state,
        status: "put/pending",
      };
    case types.PUT_JOURNAL_SUCCESS:
      return {
        ...state,
        status: "put/success",
      };
    case types.PUT_JOURNAL_ERROR:
      return {
        ...state,
        status: "put/error",
        error: action.payload,
      };
    case types.PUT_JOURNAL_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.DELETE_JOURNAL_START:
      return {
        ...state,
        status: "delete/pending",
      };
    case types.DELETE_JOURNAL_SUCCESS:
      return {
        ...state,
        status: "delete/success",
      };
    case types.DELETE_JOURNAL_ERROR:
      return {
        ...state,
        status: "delete/error",
        error: action.payload,
      };
    case types.DELETE_JOURNAL_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.SET_JOURNAL_ACTIVE:
      return {
        ...state,
        journal: action.payload,
      };
    default:
      return state;
  }
};

export default journalReducer;
