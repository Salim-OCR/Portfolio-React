import React from "react";
import Buttons from "../components/Buttons";
import Projects from "../components/porfolio/Projects";

const Projet2 = () => {
  return (
    <section className="project">
      <Projects projectNumber={1} />
      <Buttons left={"/projet1"} right={"/projet3"} />
    </section>
  );
};

export default Projet2;
