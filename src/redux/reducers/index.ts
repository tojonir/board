import { AnyAction } from "@reduxjs/toolkit";
import {
  addColumn,
  addRow,
  removeColumn,
  removeRow,
  updateColumn,
} from "@utils/constant";

export const appReducer = (
  state: string = "Welcome to react starter by tojonirina",
  action: AnyAction
) => {
  switch (action.type) {
    case "app":
      return "welcome";

    default:
      return state;
  }
};

export const columnReducer = (
  state: { id: string; title: string }[] = [],
  action: AnyAction
) => {
  switch (action.type) {
    case addColumn:
      return [...state, { id: action.id, title: action.title }];

    case removeColumn:
      return [...state.filter((c) => c.id !== action.id)];

    case updateColumn:
      const updatedData = state.map((col) => {
        if (col.id === action.id) {
          return { ...col, title: action.title };
        }
        return col;
      });
      return updatedData;

    default:
      return state;
  }
};

export const rowReducer = (state: any = [], action: AnyAction) => {
  switch (action.type) {
    case addRow:
      return [...state, { ...action.data, id: action.id }];
    case removeRow:
      return [...state.filter((c: any) => c.id !== action.id)];

    default:
      return state;
  }
};
