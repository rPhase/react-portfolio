import { experience } from "@/data/experience-data";
import ExperienceDetail from "./ExperienceDetail";
const Experience = () => {
  return (
    <div id="experience" className="text-2xl">
      <h1 className="py-8 text-4xl uppercase tracking-wider">Experience</h1>
      {experience.map((exp, index) => (
        <ExperienceDetail key={index} experience={exp} />
      ))}
    </div>
  );
};
export default Experience;
