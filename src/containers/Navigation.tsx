import Avatar from "@components/Avatar";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface menuSchema {
  icon: IconDefinition;
  label: string;
}

const Navigation: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const menu: menuSchema[] = [
    {
      icon: solid("user-alt"),
      label: "profile",
    },
    {
      icon: solid("chart-column"),
      label: "dashboard",
    },
    {
      icon: solid("gear"),
      label: "settings",
    },
  ];
  return (
    <nav className="h-[50px] border-b flex justify-between items-center px-5 text-gray-600 shadow-sm relative">
      <h1 className="font-semibold">Board</h1>
      <div className="h-full flex justify-between items-center w-1/2">
        <Link to="/">Home</Link>
        <Link to="/">Project</Link>
        <Link to="/">Activity</Link>
        <Avatar onClick={() => setShow(!show)} />
        {show && (
          <div className="bg-white rounded-[3px] p-3 absolute top-full right-0 w-[250px] text-gray-600">
            <Avatar large />
            <div className="border-t mt-2">
              {menu.map((item, i) => (
                <Link
                  key={i}
                  to={`/${item.label}`}
                  className="flex items-center px-1 py-2 hover:bg-gray-200 rounded-[2px]"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[14px] mr-1"
                  />
                  <span className="capitalize">{item.label}</span>
                </Link>
              ))}
              <div className="text-red-500 flex items-center px-1 py-2 hover:bg-gray-200 rounded-[2px] cursor-pointer">
                <FontAwesomeIcon
                  icon={solid("sign-out-alt")}
                  className="text-[14px] mr-1"
                />
                <span>logout</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
