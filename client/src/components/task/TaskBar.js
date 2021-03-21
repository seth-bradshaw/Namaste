import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function TaskBar(props) {
  const { task, setModalActive } = props;
  return (
    <div onClick={() => setModalActive(true)}>
      <Badge pill variant="secondary">
        {task.title}
      </Badge>
    </div>
  );
}
