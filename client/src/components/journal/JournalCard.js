import React from "react";
import { Card } from "react-bootstrap";

export default function JournalCard(props) {
  const { journal } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{journal.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {journal.mood}
          </Card.Subtitle>
          <Card.Text>{journal.textBody}</Card.Text>
          <Card.Link href="#">View Entry</Card.Link>
          <Card.Link href="#">Edit Entry</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
