import React, { useState } from "react";
import { actions as journalActions } from "../store/ducks/journalDuck";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const initialState = {
  title: "make changeable",
  textBody: "",
  mood: "neutral",
  user: {},
};

export default function NewJournalForm() {
  const [newJournal, setNewJournal] = useState(initialState);
  const activeUser = useSelector((state) => state.user.activeUser);
  const dispatch = useDispatch();
  const { push } = useHistory();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewJournal({ ...newJournal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      journalActions.postJournalThunk({ ...newJournal, user: activeUser })
    );
    push("/journal");
  };

  return (
    <div style={{ width: "66%", margin: "auto" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div style={{ border: "red solid 2px" }}>
          <p>text editor options</p>
        </div>
        <textarea
          name="textBody"
          value={newJournal.textBody}
          onChange={(e) => changeHandler(e)}
          style={{ width: "100%", height: "600px" }}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
