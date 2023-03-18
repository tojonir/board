import Auth from "@pages/Auth";
import Board from "@pages/Board";
import Home from "@pages/Home";
import Project from "@pages/Project";
import Workspace from "@pages/Workspace";
import { FC } from "react";
import { Routes as Router, Route } from "react-router-dom";

const Routes: FC = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Auth />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/board" element={<Board />} />
    </Router>
  );
};

export default Routes;
