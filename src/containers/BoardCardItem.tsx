import Modal from "@components/Modal";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateRowAction } from "@redux/actions";
import { useAppDispatch } from "@utils/hooks";
import { FC, useRef, useState } from "react";

interface BoardCardItemProps {
  id: string;
  title: string;
  status: string;
}

const BoardCardItem: FC<BoardCardItemProps> = ({ id, title, status }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseMove, setMouseMove] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [offset, setOfsset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [canDrag, setCanDrag] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  window.onmousemove = (e) => {
    setMouseMove({ x: e.clientX, y: e.clientY });
    const item = cardRef.current;
    if (item && canDrag) {
      item.style.cursor = "grabbing";
      item.style.position = "absolute";
      item.style.top = mouseMove.y - offset.y + "px";
      item.style.left = mouseMove.x - offset.x + "px";
    }
  };
  const mouseup = (e: any) => {
    const item = cardRef.current;
    let doc = document.elementsFromPoint(e.clientX, e.clientY);
    doc = doc.filter((d) => d.id !== "" && d.id !== "root");
    if (doc[0] && doc[0].id !== "" && doc[0].id !== status) {
      dispatch(updateRowAction(id, { status: doc[0].id }));
    } else {
      if (item) {
        item.style.position = "relative";
        item.style.top = "0px";
        item.style.left = "0px";
      }
    }
    setCanDrag(false);
  };
  return (
    <>
      <div
        ref={cardRef}
        onMouseDown={(e) => {
          setOfsset({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
          });
          setCanDrag(true);
        }}
        onMouseUp={(e) => mouseup(e)}
        className={`bg-white p-1 min-w-[230px] rounded-[3px] cursor-grab ${
          canDrag && "shadow-md"
        }`}
        onDrag={(e) => {
          e.preventDefault();
        }}
        onDragEnd={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        <div className="flex justify-between items-center group">
          <span>{title}</span>
          <FontAwesomeIcon
            icon={regular("eye")}
            className="text-gray-400 text-[14px] cursor-pointer hidden group-hover:block"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
      {showModal && (
        <Modal close={() => setShowModal(false)}>
          <div></div>
        </Modal>
      )}
    </>
  );
};

export default BoardCardItem;
