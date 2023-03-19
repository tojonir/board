import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Search: FC = () => {
  return (
    <div className="border rounded-[3px] text-gray-400 px-2 py-[1px] flex items-center">
      <FontAwesomeIcon
        icon={solid("magnifying-glass")}
        className="text-[13px]"
      />
      <input
        placeholder="search"
        className="outline-none p-0 capitalize ml-2"
      />
    </div>
  );
};

export default Search;
