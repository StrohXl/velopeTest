import { configureStore } from "@reduxjs/toolkit";

import carousel from "./features/carousel";
import genres from "./features/genres";
import sidebar from "./features/sidebar";


export const store = configureStore({
  reducer: {
    carousel,
    sidebar,
    genres
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
