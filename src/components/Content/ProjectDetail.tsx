import { IProject } from '@/data/projects-data';

interface Props {
  project: IProject;
}
const ProjectDetail = ({ project }: Props) => {
  // destructure project components
  const { title, description, imgSrc, url, repo, builtWith } = project;

  // Construct path to public asset with base path in mind
  const imgSrcPath = `${import.meta.env.BASE_URL}/images/projects/${imgSrc}`;

  return (
    <div className='w-[55rem] p-[2rem] grid grid-cols-[auto_70%] gap-[3rem] text-gray-100'>
      <div>
        <img src={imgSrcPath} alt={title} className='' />
      </div>
      <div>
        <div>
          <h1 className='text-xl text-[#ffffff] mb-2 capitalize'>
            {title}{' '}
            {repo && (
              <a className='text-[#4284ff]' href={repo}>
                Repo
              </a>
            )}{' '}
            {url && (
              <a className='text-[#4284ff]' href={url}>
                Demo
              </a>
            )}
          </h1>
          <ul className='list-disc list-inside mb-3'>
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='flex flex-wrap gap-x-3 gap-y-3'>
          {builtWith?.map((tag) => (
            <span
              className='px-3 py-2 bg-[#0b0a46] text-[#6991ff] rounded-full'
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
