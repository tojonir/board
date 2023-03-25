import Auth from "@pages/Auth";
import AuthSuccess from "@pages/AuthSuccess";
import Board from "@pages/Board";
import Dashboard from "@pages/Dashboard";
import Home from "@pages/Home";
import Project from "@pages/Project";
import Workspace from "@pages/Workspace";
import { FC } from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import AuthGuard from "services/AuthGuard";
import WorkspaceGuard from "services/WorkspaceGuard";

const Routes: FC = () => {
  return (
    <Router>
      <Route path="/">
        <Route path="" element={<WorkspaceGuard element={<Workspace />} />} />
        <Route path=":workspace">
          <Route path="" element={<AuthGuard element={<Dashboard />} />} />
        </Route>
      </Route>

      <Route path="auth">
        <Route path="" element={<Navigate to="login" />} />
        <Route path=":authType" element={<Auth />} />
        <Route path="success" element={<AuthSuccess />} />
      </Route>
    </Router>
  );
};

export default Routes;
