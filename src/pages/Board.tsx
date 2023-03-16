import BoardCard from "@containers/BoardCard";
import BoardCardItem from "@containers/BoardCardItem";
import Layout from "@containers/Layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

interface columnSchema {
  id: number;
  title: string;
}

const Board: FC = () => {
  const [column, setColumn] = useState<columnSchema[]>([]);
  return (
    <Layout>
      <div className="w-full h-full overflow-auto p-5 grid auto-rows-max gap-4">
        <div className="p-2 bg-white rounded-[3px] max-h-[50px]">
          <p className="font-medium">Poject</p>
        </div>
        <div className="flex">
          {column.map((col, i) => (
            <BoardCard
              key={i}
              value={column[i].title}
              onUpdate={(value) => {
                const newColumn = [...column];
                newColumn[i].title = value;
                setColumn(newColumn);
              }}
              onDelete={() =>
                setColumn([...column.filter((c) => c.id !== col.id)])
              }
            >
              <BoardCardItem />
              <BoardCardItem />
            </BoardCard>
          ))}

          <div className="bg-white rounded-[3px] w-[50px] h-fit overflow-hidden">
            <div
              className="w-full h-[50px] flex items-center justify-center cursor-pointer hover:bg-gray-100"
              onClick={() =>
                setColumn([...column, { id: column.length, title: "" }])
              }
            >
              <FontAwesomeIcon icon={solid("add")} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Board;
