import { IProject } from '@/data/projects';

interface Props {
  project: IProject;
}
const ProjectDetail = ({ project }: Props) => {
  return (
    <>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url}>link</a>
    </>
  );
};
export default ProjectDetail;
