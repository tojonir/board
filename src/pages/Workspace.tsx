import Input from "@components/Input";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface WorkspaceProps {}

const Workspace: FC<WorkspaceProps> = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-gray-200">
      <div className="w-1/3 h-fit bg-white rounded-[3px] p-2 flex flex-col justify-between">
        <div className="">
          <p className="text-[25px]">Workspace</p>
          <div className="flex items-center py-5">
            <Input label="enter workspace" />
            <button className="bg-blue-600 w-1/3 text-white px-2 py-2 rounded-[3px]">
              start
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <div className="cursor-pointer">
            <FontAwesomeIcon
              icon={solid("sign-out-alt")}
              className="rotate-180 mr-2"
            />
            <span>logout</span>
          </div>
          <Link to="/project">Personal space</Link>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
