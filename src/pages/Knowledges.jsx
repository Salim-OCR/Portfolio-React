import Buttons from "../components/Buttons";
import Languages from "../components/knowledges/Languages";
import Experiences from "../components/knowledges/Experiences";
import OthersSkills from "../components/knowledges/OthersSkills";
import Hobbies from "../components/knowledges/Hobbies";
import { motion } from "framer-motion";

function Knowledges() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      id="pageKnowledges"
    >
      <h2>mes compétences</h2>
      <Languages />
      <Experiences />
      <OthersSkills />
      <Hobbies />

      <Buttons left={"/"} right={"/projet1"} />
    </motion.section>
  );
}
export default Knowledges;
