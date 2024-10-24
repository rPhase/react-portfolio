import Intro from './IntroNav/Intro';
import NavButton from './IntroNav/NavButton';

const IntroNavSection = () => {
  return (
    <div className="hidden h-full w-[35rem] flex-col gap-32 bg-sky-950 lg:fixed lg:flex">
      <Intro />
      {/* Navigation */}
      <div className="flex flex-col gap-2 text-[2rem] font-medium">
        <NavButton>About</NavButton>
        <NavButton>Experience</NavButton>
        <NavButton>Projects</NavButton>
      </div>

      <div>Socials</div>
    </div>
  );
};
export default IntroNavSection;
