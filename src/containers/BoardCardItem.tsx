import { FC, useRef, useState } from "react";

interface BoardCardItemProps {
  id: string;
  title: string;
}

const BoardCardItem: FC<BoardCardItemProps> = ({ id, title }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseMove, setMouseMove] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [offset, setOfsset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [canDrag, setCanDrag] = useState<boolean>(false);

  window.onmousemove = (e) => {
    setMouseMove({ x: e.clientX, y: e.clientY });
    const item = cardRef.current;
    if (item && canDrag) {
      item.style.position = "absolute";
      item.style.top = mouseMove.y - offset.y + "px";
      item.style.left = mouseMove.x - offset.x + "px";
    }
  };
  const mouseup = (e: any) => {
    let doc = document.elementsFromPoint(e.clientX, e.clientY);
    doc = doc.filter((d) => d.id !== "" && d.id !== "root");
    const item = cardRef.current;
    if (item) {
      item.style.position = "relative";
      item.style.top = "0px";
      item.style.left = "0px";
    }
    console.log(cardRef.current?.parentElement);
    setCanDrag(false);
  };
  return (
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
      className={`bg-white p-1 min-w-[230px] rounded-[3px] ${
        canDrag && "shadow-md"
      }`}
      onDrag={(e) => {
        e.preventDefault();
      }}
      onDragEnd={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="pointer-events-none">{title}</div>
    </div>
  );
};

export default BoardCardItem;
