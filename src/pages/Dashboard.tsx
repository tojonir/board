import Layout from "@containers/Layout";
import { FC } from "react";
import folder from "@assets/folder.png";
import team from "@assets/team.png";
import task from "@assets/task.png";
import bug from "@assets/bug.png";
import DashTable from "@containers/DashTable";

const Dashboard: FC = () => {
  const headerData = [
    {
      icon: folder,
      label: "project",
      count: 3,
      bg: "bg-blue-100",
    },
    {
      icon: team,
      label: "team",
      count: 10,
      bg: "bg-green-100",
    },
    {
      icon: task,
      label: "task",
      count: 5,
      bg: "bg-orange-100",
    },
    {
      icon: bug,
      label: "Issue",
      count: 0,
      bg: "bg-red-100",
    },
  ];
  return (
    <Layout>
      <div className="p-5">
        <div className="grid grid-cols-4 gap-4">
          {headerData.map((data) => (
            <div className="bg-white p-2 px-5 rounded-[3px] shadow-sm flex justify-between items-center">
              <div className={`${data.bg} p-2 w-[50px] h-[50px] rounded-[50%]`}>
                <img src={data.icon} alt="" className="w-full" />
              </div>
              <div className="text-right">
                <p className="font-medium text-[30px] leading-8">
                  {data.count}
                </p>
                <p className="text-gray-400 capitalize">{data.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white rounded-[3px] shadow-sm">
            <DashTable
              title="team"
              buttonLabel="new member"
              header={["Profile", "Role", "Member since", "Action"]}
            />
          </div>
          <div className="bg-white rounded-[3px] shadow-sm">
            <DashTable />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
