import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addRowAction } from "@redux/actions";
import { useAppDispatch } from "@utils/hooks";
import { FC, ReactNode, useRef, useState } from "react";

interface BoardCardProps {
  id: string;
  children: ReactNode;
  value: string;
  onDelete: () => void;
  onUpdate: (value: string) => void;
}

const BoardCard: FC<BoardCardProps> = ({
  id,
  value,
  onDelete,
  onUpdate,
  children,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentValue, setCurrentValue] = useState<string>(value);
  const dispatch = useAppDispatch();
  return (
    <div className="bg-gray-100 rounded-[3px] w-[250px] p-2 mr-3 h-fit" id={id}>
      <div className="border-b pb-2 flex justify-between items-center group">
        <input
          ref={inputRef}
          className="font-medium outline-none capitalize bg-transparent focus:text-blue-500"
          placeholder="Title"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value.toLowerCase())}
          onKeyDown={(e) => e.key === "Enter" && inputRef.current?.blur()}
          onBlur={() => value !== currentValue && onUpdate(currentValue)}
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
          onClick={() =>
            dispatch(addRowAction({ title: "New Item", status: id }))
          }
        />
      </div>
    </div>
  );
};

export default BoardCard;
