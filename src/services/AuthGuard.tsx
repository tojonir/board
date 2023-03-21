import { useAppSelector } from "@utils/hooks";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  element: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ element }) => {
  const auth = useAppSelector((state) => state.user);
  return <>{!!auth ? element : <Navigate to="/auth" />}</>;
};

export default AuthGuard;
