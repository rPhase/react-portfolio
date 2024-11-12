import { ISkill } from '@/data/about-data';

interface Props {
  skill: ISkill;
}
const SkillItem = ({ skill }: Props) => {
  const SkillSvg = skill.icon;

  return (
    <a href={skill.URL} target="_blank " rel="noreferrer noopener">
      <li className="flex items-center gap-2 bg-primary px-4 py-2 text-[1.65rem] font-normal text-secondary">
        {SkillSvg && <SkillSvg style={{ color: skill.iconColor }} />}
        <span>{skill.name}</span>
      </li>
    </a>
  );
};
export default SkillItem;
