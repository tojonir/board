import Avatar from "@components/Avatar";
import Search from "@components/Search";
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
    <nav className="w-full h-[50px] p-3 border-b flex justify-between items-center px-5 text-gray-600 shadow-sm relative">
      <div className="w-1/3">
        <Search />
      </div>
      <div className="h-full flex items-center">
        <div className="border-r h-full mr-4 px-4 text-gray-500">
          <FontAwesomeIcon
            icon={solid("bell")}
            className="px-5 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={solid("gear")}
            className="px-5 cursor-pointer"
          />
        </div>
        <Avatar onClick={() => setShow(!show)} />
        {show && (
          <div className="bg-white shadow-md border rounded-[3px] p-3 absolute top-full right-0 w-[250px] text-gray-600">
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
