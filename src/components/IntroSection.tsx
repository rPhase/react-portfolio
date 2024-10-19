import Intro from './Intro/Intro';
import NavButton from './Intro/NavButton';

const IntroSection = () => {
  return (
    <div className='fixed flex flex-col h-full bg-sky-950 gap-32'>
      <Intro />
      {/* Navigation */}
      <div className='text-[1.5rem] font-medium flex flex-col gap-2'>
        <NavButton>About</NavButton>
        <NavButton>Experience</NavButton>
        <NavButton>Projects</NavButton>
      </div>

      <div>Socials</div>
    </div>
  );
};
export default IntroSection;
