import Input from "@components/Input";
import Modal from "@components/Modal";
import Layout from "@containers/Layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface WorkspaceProps {
  manage?: boolean;
}

const Workspace: FC<WorkspaceProps> = ({ manage = false }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      {!manage ? (
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
      ) : (
        <Layout>
          <div className="p-5">
            <div className="mt-5">
              <button
                className="bg-blue-600 text-white px-2 py-1 rounded-[3px]"
                onClick={() => setShowModal(true)}
              >
                New Project
              </button>
              {showModal && (
                <Modal close={() => setShowModal(false)}>
                  <div className="bg-white border flex flex-col p-3">
                    <Input label="new project" />
                    <button className="bg-blue-600 text-white px-2 py-1 rounded-[3px]">
                      create
                    </button>
                  </div>
                </Modal>
              )}
            </div>
            <div>
              <table className="w-2/3 mt-5">
                <thead>
                  <tr className="border-b text-gray-400">
                    <td className="w-1/3">Name</td>
                    <td className="border-x px-2 w-1/3">Team</td>
                    <td className="text-center w-1/3">Created on</td>
                  </tr>
                </thead>
              </table>
              <table className="w-2/3 mt-5">
                <tbody>
                  <tr className="border-b text-gray-500">
                    <td className="w-1/3">Project1</td>
                    <td className="border-x px-2 w-1/3">Team</td>
                    <td className="text-center w-1/3">12 June 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Workspace;
