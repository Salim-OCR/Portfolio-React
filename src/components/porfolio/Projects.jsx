import React, { useEffect, useState } from "react";
import { projectsData } from "../../data/projectsData";
import { motion } from "framer-motion";

const Projects = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);
  console.log(currentProject);

  //VARIABLES CIRCLE ALEATOIR
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      transition: { durantion: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { durantion: 0.35 },
      x: 800,
    },
  };

  const transition = {
    ease: [0.37, 0.8, 0.88, 0.43],
    durantion: 0.6,
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1),
      y: Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className="project-main"
      initial={"initial"}
      animate="visible"
      exit={"exit"}
      transition={transition}
      variants={variants}
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date} </p>
        <ul className="languages">
          {currentProject.languages.map((item) => {
            return <li key={item}>{item} </li>;
          })}
        </ul>
      </div>
      <motion.div
        className="img-content"
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ durantion: 1.2 }}
      >
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title} </h3>
            <p>{currentProject.infos} </p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="button">voir le site</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
