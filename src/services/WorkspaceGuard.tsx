import { useAppSelector } from "@utils/hooks";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface WorkspaceGuardProps {
  element: ReactNode;
}

const WorkspaceGuard: FC<WorkspaceGuardProps> = ({ element }) => {
  const workspace = useAppSelector((state) => state.workspace);
  const user = useAppSelector((state) => state.user);
  return (
    <>
      {user ? (
        <Navigate to={workspace ? `/${workspace}` : "/myspace"} />
      ) : (
        element
      )}
    </>
  );
};

export default WorkspaceGuard;
