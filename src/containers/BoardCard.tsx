import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode } from "react";

interface BoardCardProps {
  children: ReactNode;
  value: string;
  onDelete: () => void;
  onUpdate: (value: string) => void;
}

const BoardCard: FC<BoardCardProps> = ({
  value,
  onDelete,
  onUpdate,
  children,
}) => {
  return (
    <div className="bg-gray-100 rounded-[3px] w-[250px] p-2 mr-3" id={value}>
      <div className="border-b pb-2 flex justify-between items-center group">
        <input
          className="font-medium outline-none capitalize bg-transparent"
          placeholder="Title"
          value={value}
          onChange={(e) => onUpdate(e.target.value.toLowerCase())}
        />
        <FontAwesomeIcon
          icon={solid("trash")}
          className="text-gray-400 cursor-pointer hover:text-gray-500 hidden group-hover:block"
          onClick={() => onDelete()}
        />
      </div>
      <div className="min-h-[30px] grid grid-cols-1 gap-2 py-2">{children}</div>
      <div className="flex justify-end items-center">
        <FontAwesomeIcon
          icon={solid("add")}
          className="text-gray-400 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BoardCard;
