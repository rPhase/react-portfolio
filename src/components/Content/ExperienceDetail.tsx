import { IExperience } from '@/data/experience-data';

interface Props {
  experience: IExperience;
}
const ExperienceDetail = ({ experience }: Props) => {
  return (
    <div>
      <div>
        <p>{experience.startDate}</p>
        <p>{experience.endDate}</p>
      </div>
      <div>
        <h3>{experience.name}</h3>
        <h3>{experience.title}</h3>
        <p>{experience.description}</p>
        <a href={experience.url}>link</a>
      </div>
    </div>
  );
};
export default ExperienceDetail;
