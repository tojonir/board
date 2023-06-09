import {
  appReducer,
  columnReducer,
  rowReducer,
  userReducer,
  workspaceReducer,
} from "@redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    column: columnReducer,
    row: rowReducer,
    workspace: workspaceReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
