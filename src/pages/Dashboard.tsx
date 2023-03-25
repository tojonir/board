import { FC } from "react";
import folder from "@assets/folder.png";
import team from "@assets/team.png";
import task from "@assets/task.png";
import bug from "@assets/bug.png";
import DashTable from "@containers/DashTable";
import { useQuery } from "@apollo/client";
import { GET_WORKSPACE_DATA } from "@graphql/query";
import { workspace } from "@graphql/cache";

const Dashboard: FC = () => {
  const currentWorkspace = workspace();
  const { loading, data } = useQuery(GET_WORKSPACE_DATA, {
    variables: { id: currentWorkspace.id },
  });

  const headerData = [
    {
      icon: folder,
      label: "project",
      count: data ? data.getWorkspaceById.sumup.project : 0,
      bg: "bg-blue-100",
    },
    {
      icon: team,
      label: "team",
      count: data ? data.getWorkspaceById.sumup.team : 0,
      bg: "bg-green-100",
    },
    {
      icon: task,
      label: "task",
      count: 0,
      bg: "bg-orange-100",
    },
    {
      icon: bug,
      label: "Issue",
      count: 0,
      bg: "bg-red-100",
    },
  ];

  if (loading) return <p>loading ...</p>;

  const teamData =
    data &&
    data.getWorkspaceById.project
      .filter((t: any) => t.team.length > 0)
      .map((t: any) => {
        const row = t.team.map((t: any) => {
          return [t.info.username, "developer", "10/01/23", "delete"];
        });
        return row;
      });

  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-4">
        {headerData.map((data, i) => (
          <div
            key={i}
            className="bg-white p-2 px-5 rounded-[3px] shadow-sm flex justify-between items-center"
          >
            <div className={`${data.bg} p-2 w-[50px] h-[50px] rounded-[50%]`}>
              <img src={data.icon} alt="" className="w-full" />
            </div>
            <div className="text-right">
              <p className="font-medium text-[30px] leading-8">{data.count}</p>
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
            header={["Profile", "Role", "created_at", "Action"]}
            data={teamData[0]}
          />
        </div>
        <div className="bg-white rounded-[3px] shadow-sm">
          <DashTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
