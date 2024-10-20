import { IProject } from "@/data/projects-data";

interface Props {
  project: IProject;
}
const ProjectDetail = ({ project }: Props) => {
  // destructure project components
  const { title, description, imgSrc, url, repo, builtWith } = project;

  // Construct path to public asset with base path in mind
  const imgSrcPath = `${import.meta.env.BASE_URL}/images/projects/${imgSrc}`;

  return (
    <div className="grid w-[55rem] grid-cols-[auto_70%] gap-[3rem] p-[2rem] text-gray-100">
      <div>
        <img src={imgSrcPath} alt={title} className="" />
      </div>
      <div>
        <div>
          <h1 className="mb-2 text-xl capitalize text-[#ffffff]">
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
          <ul className="mb-3 list-inside list-disc">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-3">
          {builtWith?.map((tag) => (
            <span
              className="rounded-full bg-[#0b0a46] px-3 py-2 text-[#6991ff]"
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
