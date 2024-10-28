import Intro from './IntroNav/Intro';
import NavButton from './IntroNav/NavButton';
import Socials from './IntroNav/Socials';

const IntroNavSection = () => {
  return (
    <div className="fixed h-20 w-full bg-sky-950 lg:flex lg:h-full lg:w-[35rem] lg:flex-col lg:gap-32">
      <div className="hidden lg:block">
        <Intro />
      </div>

      {/* Navigation */}
      <div className="mr-8 flex justify-end gap-4 pt-2 text-[2rem] font-medium lg:mr-0 lg:flex-1 lg:flex-col lg:justify-start lg:gap-2">
        <NavButton>About</NavButton>
        <NavButton>Experience</NavButton>
        <NavButton>Projects</NavButton>
      </div>

      <div className="hidden lg:block">
        <Socials />
      </div>
    </div>
  );
};
export default IntroNavSection;
