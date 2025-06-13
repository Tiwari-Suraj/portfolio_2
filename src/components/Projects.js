import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import project1 from "../assets/project_1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project_3.jpg";
import { motion } from "motion/react";

function Projects() {
  const projectList = [
    {

      title: " (QuicKCart) E-Commerce Website",
      dec: "QuickCart is a  website for fashion and lifestyle products with various category and user-friendly e-commerce website",
      tools: "HTML5, Tailwind CSS, JavaScript, ReactJS, Redux",
      github_code: "https://github.com/Tiwari-Suraj/E-commerce-web-using_R.git",
      diploy_link: "https://e-commerce-website-qick-cart-nu.vercel.app/",
      image: project1,
    },
    {
      title: "Doctor's Appintment Website",
      dec: "Doctor's Appointment Website allows patients to easily book, manage, and track their medical appointments online. It offers doctor profiles, availability, appointment history, and secure communication for a seamless healthcare experience.",
      tools: "HTML5,Tailwind CSS, JavaScript, ReactJs, Redux,Node.js,Express.js, MongoDb ",
      github_code: "https://github.com/Tiwari-Suraj/doctor_appointment_module.git",
      diploy_link: "https://doctor-appointment-fe.netlify.app/",
      image: project2,
    },
    {
      title: "Real Estate Website",
      dec: "A  real estate website for browsing, Buying and Sell properties with search filters, property details, and contact options.",
      tools: "HTML5,Tailwind CSS, JavaScript, ReactJs",
      github_code: "https://github.com/Tiwari-Suraj/real_estate_frontend_project.git",
      diploy_link: "https://real-estate-me9q.vercel.app/",
      image: project3,
    },
  ];
  return (
    <div>
      <div className="pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-center bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]  bg-clip-text font-extrabold text-transparent sm:text-5xl">
          Projects
        </motion.h1>
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="grid grid-cols-1 md:grid-cols-2  gap-12 w-[80%] m-auto">
        {projectList.map((item, index) => (
          <div
            key={index}
            className="block rounded-lg p-4 shadow-md  m-2 shadow-indigo-100"
          >
            <img
              alt=""
              src={item.image}
              className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
              <dl>
                <div>
                  <dt className="text-center mt-10 text-2xl font-bold  bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] text-transparent bg-clip-text">
                    {item.title}
                  </dt>
                </div>

                <div>
                  <dt className="text-center text-md  font-semibold">
                    {item.dec}
                  </dt>

                  <dd className="font-medium text-md">
                    <span className="text-red-600 text-md">Tech Stack :</span>{" "}
                    {item.tools}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 justify-between text-xl">
                {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center  sm:gap-2"> */}
                {/* logo */}
                <div className="flex m-auto mt-6 mb-0 pb-0 gap-[120px] md:gap-[250px] ">
                  <Link to={item.github_code} target="_blank">
                    <FaGithub className="w-4 h-4" />
                  </Link>
                  <Link to={item.diploy_link} target="_blank">
                    <FaArrowUpRightFromSquare className="w-4 h-4 " />
                  </Link>
                </div>
                {/* </div> */}

                {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div className="mt-1.5 sm:mt-0"></div>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  );
}

export default Projects;
