import AuthForm from "@containers/AuthForm";
import { workspace } from "@graphql/cache";
import { FC } from "react";
import { Navigate } from "react-router-dom";

const Auth: FC = () => {
  const currentWorkspace = workspace();
  return (
    <>
      {currentWorkspace ? (
        <div className="w-screen h-screen overflow-hidden grid grid-cols-2">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-[44px] font-medium">
                {currentWorkspace
                  ? `Continue to ${currentWorkspace.name}`
                  : "Welcome to startrack"}
              </h1>
              <p>be part of us today</p>
            </div>
          </div>
          <div className="bg-gray-200 flex justify-center items-center">
            <AuthForm />
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Auth;
