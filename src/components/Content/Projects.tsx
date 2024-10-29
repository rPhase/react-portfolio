import { projects } from '@/data/projects-data';
import ProjectDetail from './ProjectDetail';
const Projects = () => {
  return (
    <div className="">
      <h1 className="py-8 text-4xl uppercase tracking-wider">Projects</h1>
      {projects.map((project, index) => (
        <ProjectDetail key={index} project={project} />
      ))}
    </div>
  );
};
export default Projects;
