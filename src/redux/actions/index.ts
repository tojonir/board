import { addColumn, removeColumn, updateColumn } from "@utils/constant";

export const addColumnAction = (title: string) => ({
  type: addColumn,
  id: 0,
  title,
});

export const removeColumnAction = (id: string) => ({
  type: removeColumn,
  id,
});

export const updateColumnAction = (id: number, title: string) => ({
  type: updateColumn,
  id,
  title,
});
