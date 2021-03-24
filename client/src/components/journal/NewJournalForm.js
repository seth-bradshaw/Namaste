import React, { useState } from "react";
import { actions as journalActions } from "../store/ducks/journalDuck";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
import Textarea from "react-expanding-textarea";

const initialState = {
  title: "make changeable",
  textBody: "",
  mood: "neutral",
  user: {},
};

export default function NewJournalForm(props) {
  const [newJournal, setNewJournal] = useState(initialState);
  const { closeEditor } = props;
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
    setTimeout(function () {
      closeEditor();
    }, 30);
  };

  return (
    <div style={{ width: "50%", height: "700px", margin: "auto" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div style={{ border: "red solid 2px" }}>
          <p>text editor options</p>
        </div>
        <div style={{ display: "flex" }}>
          <Textarea
            rows
            name="textBody"
            value={newJournal.textBody}
            onChange={(e) =>
              setNewJournal({ ...newJournal, textBody: e.target.value })
            }
            style={{
              width: "100%",
              height: "100vh",
              // padding: "20px",
              fontSize: "1rem",
              outline: "none",
            }}
          ></Textarea>
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
}
