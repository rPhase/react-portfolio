import { IProject } from '@/data/projects-data';
import { CgGitFork } from 'react-icons/cg';
import { FaExternalLinkAlt } from 'react-icons/fa';
import TagItem from './TagItem';

interface Props {
  project: IProject;
}
const ProjectDetail = ({ project }: Props) => {
  // destructure project components
  const { title, description, imgSrc, url, repo, builtWith } = project;

  // Construct path to public asset with base path in mind
  const imgSrcPath = `${import.meta.env.BASE_URL}/images/projects/${imgSrc}`;

  return (
    <div className="mb-8 flex flex-col gap-y-4 rounded-2xl p-8 lg:grid lg:grid-cols-[auto_65%] lg:items-start lg:gap-[3rem]">
      <div className="order-2 mx-auto max-w-[40rem] lg:order-none">
        <img src={imgSrcPath} alt={title} className="rounded-lg" />
        {(repo || url) && (
          <div className="dark:bg-secondaryDark bg-secondary flex justify-center gap-x-20 pb-2 text-2xl lg:gap-x-10">
            {repo && (
              <a
                className="text-tBaseDark flex items-center gap-x-2"
                href={repo}
              >
                Repo <CgGitFork />
              </a>
            )}
            {url && (
              <a
                className="text-tBaseDark flex items-center gap-x-2"
                href={url}
              >
                Demo <FaExternalLinkAlt />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="order-1 lg:order-none">
        <div>
          <h1 className="mb-2 text-3xl capitalize">{title}</h1>

          <ul className="mb-3 list-inside list-disc text-2xl">
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
    </div>
  );
};
export default ProjectDetail;
