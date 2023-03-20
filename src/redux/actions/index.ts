import {
  addColumn,
  addRow,
  removeColumn,
  removeRow,
  setUser,
  updateColumn,
  updateRow,
} from "@utils/constant";

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

export const addRowAction = (data: any) => ({
  type: addRow,
  id: Math.random().toString(36).substr(2, 9),
  data,
});

export const removeRowAction = (id: string) => ({
  type: removeRow,
  id,
});

export const updateRowAction = (id: string, data: any) => ({
  type: updateRow,
  id,
  data,
});

export const setUserAction = (token: string) => ({
  type: setUser,
  token,
});

export const removeUserAction = (token: string) => ({
  type: setUser,
});
