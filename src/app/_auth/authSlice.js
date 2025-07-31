import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.map((user) => {
        if (
          user.email === action.payload.email ||
          user.username === action.payload.username
        ) {
          return "email or username already exist";
        }
        if (action.payload.username === "" || action.payload.email === "") {
          return "username and email both are required";
        }
      });

      const newUser = {
        id: nanoid(),
        ...action.payload,
      };
      state.push(newUser);
    },
    login: (state, action) => {
      state.find((user) =>
        user.email === action.payload.email &&
        user.password === action.payload.password
          ? "Login Successful "
          : "Please enter correct email or password"
      );
    },
  },
});

export const { signup, login } = userSlice.actions;
export default userSlice.reducer;

export const users = initialState;
