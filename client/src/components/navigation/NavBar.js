import React from "react";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "50px",
      }}
    >
      <h1 style={{ alignContent: "center", fontSize: "22px" }}>Namaste</h1>
      <div className="NavBar_Link_Container" style={{ fontSize: "18px" }}>
        <a href="/tasks" style={{ alignContent: "center", padding: "5%" }}>
          Tasks
        </a>
        <a href="/journals" style={{ alignContent: "center", padding: "5%" }}>
          Journals
        </a>
      </div>
      <button>Menu</button>
    </div>
  );
}
