import React from "react";
import { Card } from "react-bootstrap";

export default function JournalCard(props) {
  const { journal, handleJournalOpen } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{journal.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {journal.mood}
          </Card.Subtitle>
          <Card.Link
            as={"a"}
            onClick={(e) => {
              console.log(e);
              handleJournalOpen(journal);
            }}
          >
            Open
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
