import { FC } from "react";
import { useAppSelector } from "@utils/hooks";

interface AvatarProps {
  label?: boolean;
  large?: boolean;
  onClick?: () => void;
}

const Avatar: FC<AvatarProps> = ({ label = true, large = false, onClick }) => {
  const { avatar, username, fullname } = useAppSelector((state) => state.user);
  return (
    <div
      className={`grid gap-2 ${
        large ? "grid-cols-1" : "grid-flow-col"
      } items-center cursor-pointer`}
      onClick={() => onClick && onClick()}
    >
      {label && (
        <div
          className={`flex flex-col text-right  ${
            large && "!text-center order-last"
          }`}
        >
          <span className="font-semibold text-[14px] capitalize">
            {fullname}
          </span>
          <span className="text-[11px] text text-blue-600">{username}</span>
        </div>
      )}
      <div className="flex justify-center w-full">
        <img
          alt={username}
          src={avatar}
          className={`${large ? "w-[70px]" : "w-[34px]"} rounded-[50%]`}
        />
      </div>
    </div>
  );
};

export default Avatar;
