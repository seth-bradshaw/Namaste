import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const authBaseAxiosCall = () => {
  return axios.create({
    baseURL: "https://namaste-server.herokuapp.com",
  });
};

export const login = (credentials) => {
  const { username, password } = credentials;

  return authBaseAxiosCall()
    .post("/login", {
      username: username,
      password: password,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const signUp = (newUser) => {
  const { username, email, password, firstName, lastName } = newUser;

  return authBaseAxiosCall()
    .post("/signup", {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getActiveUser = () => {
  return axiosWithAuth()
    .get(`/getuserinfo`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editUserById = (userId, editedUser) => {
  return axiosWithAuth()
    .put(`/users/user/${userId}`, editedUser)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteUserById = (userId) => {
  return axiosWithAuth()
    .delete(`/users/user/${userId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getTasksByUserId = (userId) => {
  return axiosWithAuth()
    .get(`/tasks/user/${userId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getTaskById = (taskId) => {
  return axiosWithAuth()
    .get(`/tasks/task/${taskId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const addNewTask = (newTask) => {
  return axiosWithAuth()
    .post(`/tasks/tasks`, newTask)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editTaskById = (taskId, editedTask) => {
  return axiosWithAuth()
    .put(`/tasks/task/${taskId}`, editedTask)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteTaskById = (taskId) => {
  return axiosWithAuth()
    .delete(`/tasks/task/${taskId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getJournalsByUserId = (userId) => {
  return axiosWithAuth()
    .get(`/journals/user/${userId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getJournalById = (journalId) => {
  return axiosWithAuth()
    .get(`/journals/journal/${journalId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const addNewJournal = (newJournal) => {
  return axiosWithAuth()
    .post(`/journals/journals`, newJournal)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editJournalById = (journalId, editedJournal) => {
  return axiosWithAuth()
    .put(`/journals/journal/${journalId}`, editedJournal)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteJournalById = (journalId) => {
  return axiosWithAuth()
    .delete(`/journals/journal/${journalId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
