"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div
        transition={{
          delay: 2.1,
          duration: 2,
        }}
        initial={{
          y: 0,
        }}
        animate={{
          y: -1000,
        }}
        className="welcome w-screen h-screen flex flex-col justify-center items-center"
      >
        <motion.h1
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.2, 0.5, 0.7, 1],
            x: [30, 20, 10, 0],
            y: [30, 20, 10, 0],
          }}
          className=" welcome_message text-8xl"
        >
          WELCOME TO <br /> BAKETI PROJECT
        </motion.h1>
      </motion.div>
      <div className="absolute home_page w-screen h-screen top-0 -z-10">
        <nav className="mt-10 flex justify-center gap-170 ">
          <span className="logo text-5xl">Logo</span>
          <ul className="list_pages flex gap-6 items-center text-2xl">
            <li className="Home">Home</li>
            <li className="About ">About</li>
            <li className="Contact ">Contact</li>
            <li className="login-signup ml-5 ">
              <button className="login-signup-btn bg-green-200 pl-2.5 pr-2.5 pt-1.5 pb-1.5 rounded-lg">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
        <div className="home_page_message mt-40 text-6xl text-center">
          <h1>
            THIS PROJECT IS FOR <br /> BAKETI PURPOSE{" "}
          </h1>
        </div>
      </div>
    </>
  );
}
