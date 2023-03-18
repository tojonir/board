import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  close: () => void;
}

const Modal: FC<ModalProps> = ({ children, close }) => {
  return (
    <div className="absolute top-0 left-0 backdrop-blur-md bg-white/30 w-screen h-screen flex justify-center items-center">
      <div
        className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-white absolute top-5 right-5 cursor-pointer"
        onClick={() => close()}
      >
        <FontAwesomeIcon icon={solid("xmark")} className="" />
      </div>
      {children}
    </div>
  );
};

export default Modal;
