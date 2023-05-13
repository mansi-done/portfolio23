import React from "react";
import "./styles.css";
import { Button } from "antd";
import WinLogo from "../../assets/logo.jpg";

const TaskBar = () => {
  return (
    <div className="taskbar-wrapper">
      <button
        className="start-btn"
        style={{ padding: "none", border: "none" }}
        onClick={() => {
          console.log("click");
        }}
      >
        <img className="windows-logo" src={WinLogo} />
        <div className="text">
          <em>start</em>
        </div>
      </button>
    </div>
  );
};

export default TaskBar;
