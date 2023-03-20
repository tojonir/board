import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const AuthSuccess: FC = () => {
  window.onload = () => {
    const params: any = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, Props: string) => searchParams.get(Props),
    });
    if (params["token"] && params["keep_login"]) {
      window.close();
    }
    if (!window.opener) {
      window.location.assign("/auth/login");
    }
  };
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={solid("check")}
          size="3x"
          className="text-green-500 p-3 border w-fit rounded-[50%]"
        />
        <p className="capitalize text-[30px] text-gray-500">
          Authorization successfuly
        </p>
      </div>
    </div>
  );
};

export default AuthSuccess;
