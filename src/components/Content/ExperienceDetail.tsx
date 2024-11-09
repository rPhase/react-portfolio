import { IExperience } from '@/data/experience-data';
import TagItem from './TagItem';

interface Props {
  experience: IExperience;
}
const ExperienceDetail = ({ experience }: Props) => {
  return (
    <div className="mb-8 flex flex-col rounded-2xl p-8 lg:flex-row lg:gap-3">
      <div className="mb-2">
        <ul className="flex space-x-1 font-semibold italic lg:w-40 lg:flex-col-reverse">
          <li>{experience.startDate}</li>
          <li>{` ~ `}</li>
          <li>{experience.endDate}</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-3xl font-bold">{experience.name}</h1>
          <h2 className="text-2xl font-semibold">{experience.title}</h2>
        </div>
        <div>
          <p>{experience.description}</p>
          <ul className="list-inside list-disc pl-3 text-2xl">
            {experience.bulletPoints?.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <hr className="mx-auto my-4 w-3/4 border-gray-400" />
        <div className="flex flex-wrap gap-x-3 gap-y-3">
          {experience.techStack?.map((tag) => <TagItem key={tag} tag={tag} />)}
        </div>
      </div>
    </div>
  );
};
export default ExperienceDetail;
