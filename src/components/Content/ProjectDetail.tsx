import { IProject } from '@/data/projects';

interface Props {
  project: IProject;
}
const ProjectDetail = ({ project }: Props) => {
  // Construct path to public asset with base path in mind
  const imgSrc = `${import.meta.env.BASE_URL}/images/projects/${
    project.imgSrc
  }`;

  return (
    <div className=''>
      <div>
        <img src={imgSrc} alt={project.title} className='' />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.url}>link</a>
      </div>
    </div>
  );
};
export default ProjectDetail;
