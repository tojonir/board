import Input from "@components/Input";
import Modal from "@components/Modal";
import Layout from "@containers/Layout";
import { FC, useState } from "react";

const Project: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
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
  );
};

export default Project;
