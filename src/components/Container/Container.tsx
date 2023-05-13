import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import TaskBar from "../TaskBar/TaskBar";
import Desktop from "../Desktop/Desktop";
import "./styles.css";
import { ConfigProvider, theme, Button } from "antd";

import mybg from "../../assets/twinkling.png"
const Container = () => {
  return (
    <div className="container">
      <img id="bgimg" src={mybg} alt="Background Image"/>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: "#9782DE",
          },
        }}
      >
        {/* <TaskBar/>
        <div className="win">
          <Outlet/>
        </div>
        <Desktop/> */}

        
        <Navbar />
        <Outlet />
        <Sidebar/>
      </ConfigProvider>
    </div>
  );
};

export default Container;
