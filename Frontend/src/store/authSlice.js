import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  currentUser: null,
  // Token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Start(state) {
      state.loading = true;
    },
    Success(state, action) {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
      // console.log(action.payload?.data?.data?.token);
      // state.Token = action.payload.token;
    },
    Failure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // deleteUserStart: (state) => {
    //   state.loading = true;
    // },
    // deleteUserSuccess: (state) => {
    //   state.currentUser = null;
    //   state.loading = false;
    //   state.error = false;
    // },
    // deleteUserFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { Start, Success, Failure, signOut } = authSlice.actions;

export default authSlice.reducer;
