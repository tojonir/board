import Input from "@components/Input";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setWorkspaceAction } from "@redux/actions";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import { FC, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface WorkspaceProps {}

const Workspace: FC<WorkspaceProps> = () => {
  const workspace = useAppSelector((state) => state.workspace);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const start = (value = inputRef.current?.value) => {
    if (value && value !== "") {
      dispatch(setWorkspaceAction(value));
      navigate("/auth");
    }
  };
  return (
    <>
      {workspace ? (
        <Navigate to={`/${workspace}`} />
      ) : (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-gray-200">
          <div className="w-1/3 h-fit bg-white rounded-[3px] p-2 flex flex-col justify-between">
            <div className="">
              <p className="text-[25px]">Workspace</p>
              <div className="flex items-center py-5">
                <Input ref={inputRef} label="enter workspace" />
                <button
                  className="bg-blue-600 w-1/3 text-white px-2 py-2 rounded-[3px]"
                  onClick={() => start()}
                >
                  start
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center text-gray-400">
              <Link to="/auth/register">
                <FontAwesomeIcon icon={solid("user-alt")} className="mr-2" />
                <span>Sign up</span>
              </Link>
              <Link to="auth">Personal space</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Workspace;
