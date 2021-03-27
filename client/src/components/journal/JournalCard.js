import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actions as journalActions } from "../store/ducks/journalDuck";

export default function JournalCard(props) {
  const { journal, handleJournalOpen } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={{ fontFamily: "Poppins" }}>
            {journal.title}
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontFamily: "Poppins" }}
          >
            {journal.mood}
          </Card.Subtitle>
          <Card.Link
            as={"a"}
            onClick={(e) => {
              dispatch(journalActions.setJournalActiveThunk(journal));
              setTimeout(() => handleJournalOpen(journal), 30);
            }}
            style={{ fontFamily: "Poppins" }}
          >
            Open
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
