import Buttons from "../components/Buttons";
import Projects from "../components/porfolio/Projects";

function Porfolio() {
  return (
    <section className="project">
      <Projects projectNumber={0} />
      <Buttons left={"/knowledges"} right={"/projet2"} />
    </section>
  );
}
export default Porfolio;
