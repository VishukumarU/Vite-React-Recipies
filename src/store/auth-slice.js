import { createSlice } from "@reduxjs/toolkit";

const checkLoggedIn = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true";
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: checkLoggedIn(),
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
