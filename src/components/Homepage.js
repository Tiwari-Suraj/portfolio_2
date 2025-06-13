import React from "react";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../assets/profile_img.jpg";
import { motion, spring } from "motion/react";

function Homepage() {
  const [text] = useTypewriter({
    words: [
      "React Js Developer.",
      "Full Stack Developer.",
      "MERN Stack Developer.",
    ],
    loop: {},
  });
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 mt-4 sm:mt-0 py-8 sm:px-6 sm:py-12 lg:px-9 lg:py-16">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-44">
          <div className="relative h-64 w-64 mx-auto md:mx-0   items-center overflow-hidden rounded-full  md:w-[330px] lg:mt-5   lg:order-last lg:h-[75%]">
            <img

              alt="myprofile"
              // src="https://avatars.githubusercontent.com/u/155292217?s=400&u=dbee3321af6b149a123e91de55916622a1f9cb02&v=4"
              src={profile}
              className="absolute md:h-[391px]  w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}

            className="lg:py-24">
            <h2 className="text-2xl"> Hi, My name is </h2>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  text-transparent bg-clip-text ">
              Suraj Tiwari
            </h2>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-semibold">
              I'm a{" "}
              <span className="  bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] text-transparent bg-clip-text ">
                {text}
              </span>
              <Cursor />
            </motion.h1>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-gray-300">
              Programming is an art where mind paints the logic on the
              Computer.... -Donald Knuth
            </motion.p>
            <NavLink
              className="group mt-8  inline-block rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              to="https://drive.google.com/file/d/1MPRdBWYoBLq6BrJix3X86KIJiK5_BJ6O/view?usp=sharing"
              target="_blank"
            >
              <span className="block rounded-full dark:bg-gray-900 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                Resume Download
              </span>
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Homepage;
