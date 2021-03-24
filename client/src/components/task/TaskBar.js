import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function TaskBar(props) {
  const { task, openViewModal } = props;
  return (
    <div onClick={() => openViewModal()}>
      <Badge pill variant="secondary">
        {task.title}
      </Badge>
    </div>
  );
}
