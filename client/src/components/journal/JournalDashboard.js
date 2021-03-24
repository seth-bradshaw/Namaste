import React, { useEffect, useState } from "react";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";
import { useDispatch, useSelector } from "react-redux";
import { actions as journalActions } from "../store/ducks/journalDuck";
import { Link } from "react-router-dom";
import JournalCard from "./JournalCard";
import { CardColumns } from "react-bootstrap";
import NewJournalForm from "./NewJournalForm";
import useJournalEntry from "../hooks/useJournalEntry";

function JournalDashboard() {
  const dispatch = useDispatch();
  const [editorActive, openEditor, closeEditor] = useJournalEntry();
  const [addingJournal, setAddingJournal] = useState(false);
  const { journals } = useSelector((state) => state.journal);
  const activeUser = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    dispatch(journalActions.getJournalsThunk(activeUser.userId));
  }, []);

  useEffectAfterMount(() => {
    dispatch(journalActions.getJournalsThunk(activeUser.userId));
  }, [editorActive]);

  return (
    <div>
      {editorActive ? (
        <NewJournalForm closeEditor={closeEditor} />
      ) : (
        <div>
          <CardColumns>
            {journals.length > 0 ? (
              journals.map((jnl) => {
                return (
                  <>
                    <JournalCard journal={jnl} />
                  </>
                );
              })
            ) : (
              <p>loading...</p>
            )}
            <button onClick={() => openEditor()}>add journal</button>
          </CardColumns>
        </div>
      )}
    </div>
  );
}

export default JournalDashboard;
