import { projects } from '@/data/projects-data';
import ProjectDetail from './ProjectDetail';
const Projects = () => {
  return (
    <div id='projects'>
      {projects.map((project, index) => (
        <ProjectDetail key={index} project={project} />
      ))}
    </div>
  );
};
export default Projects;
