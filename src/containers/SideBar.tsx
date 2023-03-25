import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@assets/logo.png";
import { user, workspace } from "@graphql/cache";

export interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const navigate = useNavigate();
  const activeLink = window.location.pathname.split("/")[2];
  console.log(activeLink);
  const menu: { title: string; icon: IconDefinition }[] = [
    {
      title: "dashboard",
      icon: solid("chart-simple"),
    },
    {
      title: "list",
      icon: solid("list"),
    },
    {
      title: "board",
      icon: solid("table-cells-large"),
    },
    {
      title: "team",
      icon: solid("users"),
    },
    {
      title: "chat",
      icon: solid("comment"),
    },
  ];
  const logout = () => {
    user(null);
    workspace(null);
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="w-full flex justify-center items-center">
        <img alt="project" className="w-full rounded-[3px] mr-2" src={logo} />
      </div>
      <div className="p-1 mt-3 grow text-gray-600 flex flex-col justify-between">
        <div>
          {menu.map((m) => (
            <Link
              key={m.title}
              to={`./${m.title}`}
              className={`flex items-center ${
                activeLink === m.title && "bg-gray-100 text-green-500"
              } hover:bg-gray-100 rounded-[3px] p-1 py-2`}
            >
              <FontAwesomeIcon icon={m.icon} className="text-[13px] w-[20px]" />
              <span className="ml-2 capitalize">{m.title}</span>
            </Link>
          ))}
        </div>
        <div className="border-t">
          <div
            onClick={() => logout()}
            className="flex items-center hover:bg-gray-100 rounded-[3px] p-1 py-2 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={solid("sign-out")}
              className="text-[13px] w-[20px]"
            />
            <span className="ml-2 capitalize">logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
