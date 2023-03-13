import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export interface IWindows {
  width: number;
  height: number;
}

export interface IReduxStore {
  windows: IWindows;
}

const width = window.innerWidth;
const height = window.innerHeight;

const initState: IReduxStore = {
  windows: { width, height },
};

export const RSetWindows = createAction<IWindows>("WINDOWS");

const reducer = createReducer(initState, (builder) => {
  builder.addCase(RSetWindows, (state, action) => {
    state.windows = action.payload;
  });
});

export default configureStore({ reducer });
