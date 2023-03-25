import { useQuery } from "@apollo/client";
import Layout from "@containers/Layout";
import { user, workspace } from "@graphql/cache";
import { GET_WORKSPACE_BY_NAME } from "@graphql/query";
import { FC, ReactNode } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

interface AuthGuardProps {}

const AuthGuard: FC<AuthGuardProps> = () => {
  const query = useParams();
  const { loading, error, data } = useQuery(GET_WORKSPACE_BY_NAME, {
    variables: { name: query.workspace },
  });
  const auth = user();
  if (loading) return <p>Please wait</p>;
  if (error) return <p>{error.message}</p>;
  if (data) {
    sessionStorage.setItem(
      "workspace",
      JSON.stringify(data.getWorkspaceByName)
    );
    workspace(data.getWorkspaceByName);
  }
  return (
    <>
      {!!auth ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Navigate to="/auth" />
      )}
    </>
  );
};

export default AuthGuard;
