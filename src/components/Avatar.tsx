import { FC } from "react";
import { useAppSelector } from "@utils/hooks";

interface AvatarProps {
  label?: boolean;
  large?: boolean;
  onClick?: () => void;
}

const Avatar: FC<AvatarProps> = ({ label = true, large = false, onClick }) => {
  const { avatar, username } = useAppSelector((state) => state.user);
  return (
    <div
      className={`grid gap-2 ${
        large ? "grid-cols-1" : "grid-flow-col"
      } items-center cursor-pointer`}
      onClick={() => onClick && onClick()}
    >
      {label && (
        <div className={`flex flex-col ${large && "text-center order-last"}`}>
          <span className="font-medium text-[14px] leading-3 capitalize">
            {username}
          </span>
          <span className="text-[10px] text text-blue-600">@developer</span>
        </div>
      )}
      <div className="flex justify-center w-full">
        <img
          alt={username}
          src={avatar}
          className={`${large ? "w-[70px]" : "w-[30px]"} rounded-[50%]`}
        />
      </div>
    </div>
  );
};

export default Avatar;
