import Image from "next/image";
import { useState } from "react";
import Backend from "./Backend";
import Design from "./Design";
import Frontend from "./Frontend";
import Programming from "./Programming";
import Tools from "./Tools";
import skills from "../assets/images/skills.png";
import { motion } from "framer-motion";

import JS from "../assets/images/Javascript-JS.png";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import material from "../assets/images/material.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.jpg";
import mongodb from "../assets/images/mongodb.png";
import jwtToken from "../assets/images/jwt.png";
import netlify from "../assets/images/netlify.png";
import firebase from "../assets/images/firebase.png";

const Skills = () => {
  const data = [
    {
      id: 1,
      image: JS,
      title: "Javascript",
      description: "JS Programming",
    },
    {
      id: 2,
      image: HTML,
      title: "HTML",
      description: "C Programming",
    },
    {
      id: 3,
      image: CSS,
      title: "CSS",
      description: "C Programming",
    },
    {
      id: 4,
      image: react,
      title: "React",
      description: "C Programming",
    },
    {
      id: 5,
      image: redux,
      title: "redux",
      description: "C Programming",
    },
    {
      id: 6,
      image: bootstrap,
      title: "Bootstrap",
      description: "C Programming",
    },
    {
      id: 7,
      image: tailwind,
      title: "Tailwind",
      description: "C Programming",
    },
    {
      id: 8,
      image: material,
      title: "Material Ui",
      description: "C Programming",
    },
    {
      id: 9,
      image: node,
      title: "Node Js",
      description: "C Programming",
    },
    {
      id: 10,
      image: express,
      title: "Express",
      description: "C Programming",
    },
    {
      id: 11,
      image: mongodb,
      title: "Mongodb",
      description: "C Programming",
    },
    {
      id: 12,
      image: jwtToken,
      title: "Jwt Token",
      description: "C Programming",
    },
    {
      id: 13,
      image: netlify,
      title: "Netlify",
      description: "C Programming",
    },
    {
      id: 14,
      image: firebase,
      title: "Firebase",
      description: "C Programming",
    },
  ];
  
  const skillVariants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "linear",
        duration: 0.5,
      },
    },
  };
  
  return (
    <motion.div
    id="skill"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={skillVariants}
      className="mx-auto w-full lg:w-9/12 py-8 lg:px-6"
    >
      <div className="flex items-center mb-6">
        <Image src={skills} alt="" className="w-12 mr-3" />
        <h2 className=" text-lg md:text-2xl font-bold sm:text-4xl text-title text-center">
          Skills That I have
        </h2>
      </div>
      <motion.div
        // variants={boxVariant}
        // whileInView="visible"
        // initial="hidden"
        // viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-3 md:grid-cols-6 gap-10 md:py-8"
      >
        {data?.map((d, i) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0,y:0 },
              hidden: { opacity: 0, scale: 0, x: 50,y:50 },
            }}
            key={d?.id}
            className="flex items-center  p-2 text-small_text h-10 shadow-lg rounded  justify-start w-full"
          >
            <Image src={d?.image} alt={d?.description} className="w-6" />
            <p className="ml-2"> {d?.title} </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
