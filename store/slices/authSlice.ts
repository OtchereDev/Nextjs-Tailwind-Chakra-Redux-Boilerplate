import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/auth/auth.type";

export interface AuthState {
  user: IUser | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeUser: (state) => {
      state.user = null;
    },

    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = { ...payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeUser, setUser } = authSlice.actions;

export default authSlice.reducer;
