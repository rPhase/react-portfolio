import { IProject } from "@/data/projects-data";
import TagItem from "./TagItem";

interface Props {
  project: IProject;
}
const ProjectDetail = ({ project }: Props) => {
  // destructure project components
  const { title, description, imgSrc, url, repo, builtWith } = project;

  // Construct path to public asset with base path in mind
  const imgSrcPath = `${import.meta.env.BASE_URL}/images/projects/${imgSrc}`;

  return (
    <div className="mb-8 flex flex-col gap-[3rem] rounded-2xl bg-lime-900 p-8 text-gray-100 lg:grid lg:grid-cols-[auto_65%] lg:items-start">
      <div className="order-2 lg:order-none">
        <img src={imgSrcPath} alt={title} className="w-[30rem] rounded-lg" />
      </div>
      <div className="order-1 lg:order-none">
        <div>
          <h1 className="mb-2 text-3xl capitalize text-[#ffffff]">
            {title}{" "}
            {repo && (
              <a className="text-[#4284ff]" href={repo}>
                Repo
              </a>
            )}{" "}
            {url && (
              <a className="text-[#4284ff]" href={url}>
                Demo
              </a>
            )}
          </h1>
          <ul className="mb-3 list-inside list-disc text-2xl">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-3">
          {builtWith?.map((tag) => <TagItem key={tag} tag={tag} />)}
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
