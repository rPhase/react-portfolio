import { experience } from '@/data/experience-data';
import ExperienceDetail from './ExperienceDetail';
const Experience = () => {
  return (
    <div id='experience' className=''>
      {experience.map((exp, index) => (
        <ExperienceDetail key={index} experience={exp} />
      ))}
    </div>
  );
};
export default Experience;
