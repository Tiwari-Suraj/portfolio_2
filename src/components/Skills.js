import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import boostrap from "../assets/boostrap.png";
import js from "../assets/js.jpg";
import reactjs from "../assets/reactjs.png";
import reduxjs from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.webp";
import mui from "../assets/mui.png";
import mongodb from "../assets/mongodb.png";
import tailwindcss from "../assets/tailwindcss.png";
import { motion, spring } from "motion/react";

function Skills() {
  const skill = [
    {
      name: "HTML5",
      url: html,
    },
    {
      name: "CSS3",
      url: css,
    },
    {
      name: "Bootstrap",
      url: boostrap,
    },
    {
      name: "Material UI",
      url: mui,
    },
    {
      name: "Javascript",
      url: js,
    },
    {
      name: "React Js",
      url: reactjs,
    },

    {
      name: "Redux",
      url: reduxjs,
    },
    {
      name: "Node js",
      url: nodejs,
    },
    {
      name: "Express Js",
      url: expressjs,
    },

    {
      name: "MongoDb",
      url: mongodb,
    },
    {
      name: "Tailwind Css",
      url: tailwindcss,
    },
  ];

  return (
    <>
      <div className="bg-gray-900 w-[80%] h-fit pb-40 m-auto">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" text-center bg-gradient-to-r  from-pink-500 via-red-500 to-yellow-500  bg-clip-text font-extrabold text-transparent sm:text-5xl">
            Skills
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 pt-4  gap-4 lg:grid-cols-6 bg-gray-900 sm:grid-cols-2 h-full lg:gap-8">
          {skill.map((item, index) => (
            <div
              key={index}
              className=" h-[11rem] rounded-3xl shadow-lg  bg-[#213469] items-center px-8 py-4 m-auto"
            >
              <div className="h-24 w-24   ">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="text-center p-2">
                <h3 className="font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
