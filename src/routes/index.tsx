import { FC } from "react";
import { Routes as Router, Route } from "react-router-dom";

const Routes: FC = () => {
  return (
    <Router>
      <Route path="/" element={<p className="text-blue-500">Hello word</p>} />
    </Router>
  );
};

export default Routes;
