import { AnyAction } from "@reduxjs/toolkit";
import {
  addColumn,
  addRow,
  removeColumn,
  removeRow,
  removeUser,
  setUser,
  updateColumn,
  updateRow,
} from "@utils/constant";
import jwtDecode from "jwt-decode";

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
    case updateRow:
      const updatedData = state.map((row: any) => {
        if (row.id === action.id) {
          return { ...row, ...action.data };
        }
        return row;
      });
      return updatedData;

    default:
      return state;
  }
};

const initialUser =
  localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token");

export const userReducer = (
  state: any = initialUser && jwtDecode(initialUser),
  action: AnyAction
) => {
  switch (action.type) {
    case setUser:
      return jwtDecode(action.token);
    case removeUser:
      return null;
    default:
      return state;
  }
};

const initialWorkspace =
  localStorage.getItem("workspace") || sessionStorage.getItem("workspace");

export const workspaceReducer = (
  state: any = initialWorkspace,
  action: AnyAction
) => {
  switch (action.type) {
    case setUser:
      return action.workspace;
    case removeUser:
      return null;
    default:
      return state;
  }
};
