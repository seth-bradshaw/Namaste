import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function NavBar() {
  const { push } = useHistory();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "50px",
      }}
    >
      <h1
        style={{ alignContent: "center", fontSize: "22px" }}
        onClick={() => push("/dashboard")}
      >
        Namaste
      </h1>
      <div className="NavBar_Link_Container" style={{ fontSize: "18px" }}>
        <Link to="/task" style={{ alignContent: "center", padding: "5%" }}>
          Tasks
        </Link>
        <Link to="/journal" style={{ alignContent: "center", padding: "5%" }}>
          Journals
        </Link>
      </div>
      <button>Menu</button>
    </div>
  );
}
