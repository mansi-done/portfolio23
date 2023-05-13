import React from "react";
import "./styles.css";

import MyComputer from "../../assets/folder.jpg";

const Desktop = () => {
  return (
    <div className="desktop-wrapper">
      <div className="icon-wrapper">
        <button
          className="mycomputer"
          style={{ padding: "none", border: "none" }}
          onClick={() => {
            console.log("click");
          }}
        >
          <img className="folder-logo" src={MyComputer} />
          <div className="folder-text">My Computer</div>
        </button>
      </div>

      <div className="popable-intro">
        
      </div>
    </div>
  );
};

export default Desktop;
