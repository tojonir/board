import Board from "@pages/Board";
import Home from "@pages/Home";
import { FC } from "react";
import { Routes as Router, Route } from "react-router-dom";

const Routes: FC = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<Board />} />
    </Router>
  );
};

export default Routes;
