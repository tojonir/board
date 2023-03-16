import { addColumn, removeColumn, updateColumn } from "@utils/constant";

export const addColumnAction = (title: string) => ({
  type: addColumn,
  id: Math.random().toString(36).substr(2, 9),
  title,
});

export const removeColumnAction = (id: string) => ({
  type: removeColumn,
  id,
});

export const updateColumnAction = (id: string, title: string) => ({
  type: updateColumn,
  id,
  title,
});
