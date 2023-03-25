import { useLazyQuery } from "@apollo/client";
import Input from "@components/Input";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { workspace } from "@graphql/cache";
import { GET_WORKSPACE_BY_NAME } from "@graphql/query";
import { FC, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

interface WorkspaceProps {}

const Workspace: FC<WorkspaceProps> = () => {
  const [checkWorkspace, { data, loading }] = useLazyQuery(
    GET_WORKSPACE_BY_NAME
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const start = (value = inputRef.current?.value) => {
    if (value && value !== "") {
      checkWorkspace({
        variables: {
          name: value,
        },
      });
    }
  };

  if (data) {
    sessionStorage.setItem(
      "workspace",
      JSON.stringify(data.getWorkspaceByName)
    );
    workspace(data.getWorkspaceByName);
    navigate("/auth");
  }

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-gray-200">
      <div className="w-1/3 h-fit bg-white rounded-[3px] p-2 flex flex-col justify-between">
        <div className="w-full">
          <p className="text-[25px]">Workspace</p>
          <div className="w-full flex items-center py-5">
            <div className="grow">
              <Input ref={inputRef} label="enter workspace" />
            </div>
            <div
              onClick={() => !loading && start()}
              className="bg-blue-600 w-1/3 flex justify-center cursor-pointer text-white px-2 py-2 rounded-[3px]"
            >
              {loading ? (
                <FontAwesomeIcon icon={solid("spinner")} className="spinner" />
              ) : (
                "start"
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <Link to="/auth/register">
            <FontAwesomeIcon icon={solid("user-alt")} className="mr-2" />
            <span>Sign up</span>
          </Link>
          <Link
            to="auth"
            onClick={() => workspace({ id: "", name: "myspace" })}
            className="capitalize"
          >
            continue to personal space
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
