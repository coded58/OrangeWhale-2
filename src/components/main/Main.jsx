import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Activity from "../../pages/Activity";
import Drafts from "../../pages/Drafts";
import Settings from "../../pages/Settings";
import Post from "../../pages/Post";
import Published from "../../pages/Published";
import Scheduled from "../../pages/Scheduled";

const Main = () => {
  return (
    <div className="main">
      <Dashboard />
      <Activity />
      <Settings />
      <Post />
      <Published />
      <Scheduled />
      <Drafts />
    </div>
  );
};

export default Main;
