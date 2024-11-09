import { aboutData } from '@/data/about-data';
const Intro = () => {
  // Construct path to public asset with base path in mind
  const imgSrcPath = `${import.meta.env.BASE_URL}/images/about/${aboutData.avatarSrc}`;
  return (
    <div className="mb-20 mt-20 flex flex-col gap-12">
      <div className="flex items-center">
        <img
          src={imgSrcPath}
          alt="avatar"
          className="mr-4 h-[10rem] rounded-full"
        />
        <div className="">
          <h1 className="text-5xl font-bold">{aboutData.name}</h1>
          <h2 className="text-[2rem] capitalize">{aboutData.title}</h2>
        </div>
      </div>
      <p className="w-4/5 text-[1.5rem]">{aboutData.description}</p>
    </div>
  );
};
export default Intro;
