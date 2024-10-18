import { projects } from '@/data/projects';
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
