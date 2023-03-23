import { workspace } from "@graphql/cache";
import { useAppSelector } from "@utils/hooks";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface WorkspaceGuardProps {
  element: ReactNode;
}

const WorkspaceGuard: FC<WorkspaceGuardProps> = ({ element }) => {
  const currentWorkspace = workspace();
  const user = useAppSelector((state) => state.user);
  return (
    <>
      {user ? (
        <Navigate
          to={
            currentWorkspace !== null ? `/${currentWorkspace.name}` : "/myspace"
          }
        />
      ) : (
        element
      )}
    </>
  );
};

export default WorkspaceGuard;
