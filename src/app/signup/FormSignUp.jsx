"use client";
import { useForm } from "react-hook-form";
import { signup, login } from "../_auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "../_auth/store";

function SignupForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const users_Info = useSelector((state) => state);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        dispatch(signup(data));
        console.log(users_Info);
      })}
      className=" flex flex-col items-center gap-4 mt-10 text-3xl"
    >
      <div>
        <label htmlFor="username">Username :</label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long",
            },
            maxLength: {
              value: 20,
              message: "Username cannot exceed 20 characters",
            },
          })}
          type="text"
          placeholder="Username"
          id="username"
          className="border p-2 m-2"
        />{" "}
      </div>
      <div>
        {" "}
        <label htmlFor="email">Email : </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email"
          id="email"
          className="border p-2 m-2"
        />{" "}
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            maxLength: {
              value: 20,
              message: "Password cannot exceed 20 characters",
            },
          })}
          id="password"
          type="password"
          placeholder="Password"
          className="border p-2 m-2"
        />
      </div>

      <button
        type="submit"
        className="signup_btn cursor-pointer text-black bg-blue-600 p-2 m-2"
      >
        Sign Up
      </button>
    </form>
  );
}
export default function Signup() {
  return (
    <Provider store={store}>
      <SignupForm />
    </Provider>
  );
}
