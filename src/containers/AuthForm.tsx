import Input from "@components/Input";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = ({}) => {
  const isSignUp = window.location.pathname === "/signup";
  return (
    <div className="w-2/3 h-fit max-w-[380px] min-w-[300px] bg-white rounded-[3px] p-4 flex flex-col justify-between">
      <div>
        <div className="flex flex-col">
          {isSignUp && <Input label="username" leftIcon={solid("user-alt")} />}
          <Input label="mail" leftIcon={solid("envelope")} />
          <Input label="password" leftIcon={solid("lock")} type="password" />
          {!isSignUp && (
            <div className="flex items-center justify-end p-2">
              <input type="checkbox" className="mr-2" />
              <span>keep me login</span>
            </div>
          )}

          <button className="py-1 px-2 m-2 bg-blue-600 rounded-[3px] text-white">
            {isSignUp ? "Register" : "Login"}
          </button>
        </div>
        <div className="p-2 flex justify-center items-center">
          <div className="grow h-[1px] bg-gray-300" />
          <p className="w-fit text-[12px] text-center text-gray-400 pb-1 px-2">
            or continue with
          </p>
          <div className="grow h-[1px] bg-gray-300" />
        </div>
        <div className="p-2 grid grid-cols-1 gap-4 text-gray-600">
          <div className="border rounded-[3px] p-2">
            <FontAwesomeIcon icon={brands("github")} />
            <span className="ml-2">Continue with Github</span>
          </div>
          <div className="border rounded-[3px] p-2">
            <FontAwesomeIcon icon={brands("google")} />
            <span className="ml-2">Continue with Google</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-blue-500">
        {isSignUp ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/signup">Register</Link>
        )}

        <div className="w-[1px] mx-3" />
        <Link to="/signup">Privacy & Policy</Link>
      </div>
    </div>
  );
};

export default AuthForm;
