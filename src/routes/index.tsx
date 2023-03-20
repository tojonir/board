import Auth from "@pages/Auth";
import AuthSuccess from "@pages/AuthSuccess";
import Board from "@pages/Board";
import Dashboard from "@pages/Dashboard";
import Home from "@pages/Home";
import Project from "@pages/Project";
import Workspace from "@pages/Workspace";
import { FC } from "react";
import { Routes as Router, Route } from "react-router-dom";

const Routes: FC = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/myspace" element={<Dashboard />} />
      <Route path="/project" element={<Project />} />
      <Route path="auth">
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="success" element={<AuthSuccess />} />
      </Route>
      <Route path="/workspace">
        <Route path="" element={<Workspace />} />
        <Route path="manage" element={<Workspace manage />} />
      </Route>
      <Route path="/board" element={<Board />} />
    </Router>
  );
};

export default Routes;
