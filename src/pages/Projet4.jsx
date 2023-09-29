import React from "react";
import Buttons from "../components/Buttons";
import Projects from "../components/porfolio/Projects";

const Projet4 = () => {
  return (
    <section className="project">
      <Projects projectNumber={3} />
      <Buttons left={"/projet3"} right={"/contact"} />
    </section>
  );
};

export default Projet4;
