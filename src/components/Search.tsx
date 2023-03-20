import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Search: FC = () => {
  return (
    <div className="border rounded-[20px] text-gray-400 px-3 py-[2px] flex items-center">
      <input
        placeholder="search"
        className="outline-none p-0 capitalize ml-2"
      />
      <FontAwesomeIcon
        icon={solid("magnifying-glass")}
        className="text-[13px]"
      />
    </div>
  );
};

export default Search;
