import React from "react";
import Buttons from "../components/Buttons";
import Projects from "../components/porfolio/Projects";

const Projet3 = () => {
  return (
    <section className="project">
      <Projects projectNumber={2} />
      <Buttons left={"/projet2"} right={"/projet4"} />
    </section>
  );
};

export default Projet3;
