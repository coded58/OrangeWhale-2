import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Activity from "../../pages/Activity";
import Drafts from "../../pages/Drafts";
import Settings from "../../pages/Settings";
import Post from "../../pages/Post";
import Published from "../../pages/Published";
import Scheduled from "../../pages/Scheduled";
import NavBar from "../../reusableComponents/navBar/NavBar";

const Main = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post" element={<Post />} />
          <Route path="/published" element={<Published />} />
          <Route path="/scheduled" element={<Scheduled />} />
          <Route path="/drafts" element={<Drafts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
