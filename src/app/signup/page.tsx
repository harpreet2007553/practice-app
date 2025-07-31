import "./signup.module.css";
import Signup from "./FormSignUp";
export default function signup() {
  return (
    <div className="signup_page flex flex-col items-center w-screen h-screen">
      <h1 className="text-6xl mt-20">Sign Up</h1>
      <Signup />
    </div>
  );
}
