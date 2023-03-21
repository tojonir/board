import AuthForm from "@containers/AuthForm";
import { useAppSelector } from "@utils/hooks";
import { FC } from "react";

const Auth: FC = () => {
  const workspace = useAppSelector((state) => state.workspace);
  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-2">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-[44px] font-medium">
            {workspace ? `Continue to ${workspace}` : "Welcome to startrack"}
          </h1>
          <p>be part of us today</p>
        </div>
      </div>
      <div className="bg-gray-200 flex justify-center items-center">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
