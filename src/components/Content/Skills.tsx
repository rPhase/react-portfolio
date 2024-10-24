import { skillsData } from '@/data/about-data';

import SkillItem from './SkillItem';
const Skills = () => {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-3">
      {skillsData.map((skill) => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </ul>
  );
};
export default Skills;
