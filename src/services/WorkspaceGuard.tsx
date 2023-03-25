import { workspace } from "@graphql/cache";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface WorkspaceGuardProps {
  element: ReactNode;
}

const WorkspaceGuard: FC<WorkspaceGuardProps> = ({ element }) => {
  const currentWorkspace = workspace();
  return (
    <>
      {currentWorkspace ? (
        <Navigate to={`/${currentWorkspace.name}`} />
      ) : (
        element
      )}
    </>
  );
};

export default WorkspaceGuard;
