import BoardCard from "@containers/BoardCard";
import BoardCardItem from "@containers/BoardCardItem";
import Layout from "@containers/Layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addColumnAction,
  removeColumnAction,
  updateColumnAction,
} from "@redux/actions";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import { FC, useState } from "react";

interface BoardProps {}

interface columnSchema {
  id: number;
  title: string;
}

const Board: FC = () => {
  const column = useAppSelector((state) => state.column);
  const row = useAppSelector((state) => state.row);
  const dispatch = useAppDispatch();
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
              id={col.id}
              value={column[i].title}
              onUpdate={(value) => {
                dispatch(updateColumnAction(col.id, value));
              }}
              onDelete={() => dispatch(removeColumnAction(col.id))}
            >
              {row.map(
                (r: any) =>
                  r.status === col.id && (
                    <BoardCardItem id={r.id} title={r.title} />
                  )
              )}
            </BoardCard>
          ))}

          <div className="bg-white rounded-[3px] w-[50px] h-fit overflow-hidden">
            <div
              className="w-full h-[50px] flex items-center justify-center cursor-pointer hover:bg-gray-100"
              onClick={() => dispatch(addColumnAction(""))}
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
