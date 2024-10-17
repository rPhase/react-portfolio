import { projects } from '@/data/projects';
import ProjectDetail from './ProjectDetail';
const Projects = () => {
  return (
    <div id='projects' className='text-grayish text-[1.4rem] pt-[8rem]'>
      {projects.map((project, index) => (
        <ProjectDetail key={index} project={project} />
      ))}
    </div>
  );
};
export default Projects;
