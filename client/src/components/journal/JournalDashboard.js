import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as journalActions } from "../store/ducks/journalDuck";

export default function JournalDashboard() {
  const dispatch = useDispatch();
  const journals = useSelector((state) => state.journal.journals);

  useEffect(() => {
    dispatch(journalActions.getJournalsThunk(5));
  }, []);

  return (
    <div>
      {journals != [] ? (
          console.log(journals)
        // journals.map((jnl) => {
        //   <p>jnl.title</p>;
        // })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
