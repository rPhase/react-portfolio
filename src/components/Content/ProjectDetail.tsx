import { IProject } from '@/data/projects-data';
import { CgGitFork } from 'react-icons/cg';
import { FaExternalLinkAlt } from 'react-icons/fa';
import HoverCard from './HoverCard';
import TagItem from './TagItem';

interface Props {
  project: IProject;
}
const ProjectDetail = ({ project }: Props) => {
  // destructure project components
  const { title, description, imgSrc, url, repo, builtWith } = project;
  const displayLinks = repo || url;
  // Construct path to public asset with base path in mind
  const imgSrcPath = `${import.meta.env.BASE_URL}/images/projects/${imgSrc}`;

  return (
    <HoverCard className="mb-8 flex flex-col gap-y-4 p-8 lg:grid lg:grid-cols-[auto_65%] lg:items-start lg:gap-[3rem]">
      <div className="order-2 mx-auto max-w-[40rem] lg:order-none">
        <img
          src={imgSrcPath}
          alt={title}
          className={`rounded-t-lg ${displayLinks ? '' : 'rounded-b-lg'}`}
        />
        {displayLinks && (
          <div className="flex justify-center gap-x-20 rounded-b-lg bg-primary pb-2 text-2xl text-secondary lg:gap-x-10">
            {repo && (
              <a className="flex items-center gap-x-2" href={repo}>
                Repo <CgGitFork />
              </a>
            )}
            {url && (
              <a className="flex items-center gap-x-2" href={url}>
                Demo <FaExternalLinkAlt />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="order-1 lg:order-none">
        <div>
          <h1 className="mb-2 text-3xl capitalize">{title}</h1>

          <ul className="mb-3 ml-8 list-outside list-disc text-2xl">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <hr className="mx-auto my-4 w-3/4 border-gray-400" />
        <div className="flex flex-wrap gap-x-3 gap-y-3">
          {builtWith?.map((tag) => <TagItem key={tag} tag={tag} />)}
        </div>
      </div>
    </HoverCard>
  );
};
export default ProjectDetail;
