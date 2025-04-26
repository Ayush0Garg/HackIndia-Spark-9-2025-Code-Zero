//imports
import { createSlice } from "@reduxjs/toolkit";

import { getAuth } from "firebase/auth";

import { app } from "../../../firebase-config";

export const auth = getAuth(app);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: true },
  reducers: {
    set_user: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    clear_user: (state, action) => {
      state.user = null;
      state.loading = false;
    },
  },
});

export default authSlice;
export const authSliceActions = authSlice.actions;
