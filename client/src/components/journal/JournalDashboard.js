import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as journalActions } from "../store/ducks/journalDuck";
import { useHistory, Link } from "react-router-dom";
import JournalCard from "./JournalCard";
import { CardColumns } from "react-bootstrap";

export default function JournalDashboard() {
  const dispatch = useDispatch();
  const journals = useSelector((state) => state.journal.journals);
  const activeUser = useSelector((state) => state.user.activeUser);
  const { push } = useHistory();

  useEffect(() => {
    console.log(activeUser);
    dispatch(journalActions.getJournalsThunk(activeUser.userId));
  }, []);

  return (
    <div>
      {journals != [] ? (
        <CardColumns>
          {journals.map((jnl) => {
            return (
              <>
                <JournalCard journal={jnl} />
              </>
            );
          })}
        </CardColumns>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/new_journal">add journal</Link>
    </div>
  );
}
