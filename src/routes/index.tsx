import { FC } from "react";
import { Routes as Router, Route } from "react-router-dom";

const Routes: FC = () => {
  return (
    <Router>
      <Route path="/" element={<p>Hello word</p>} />
    </Router>
  );
};

export default Routes;
