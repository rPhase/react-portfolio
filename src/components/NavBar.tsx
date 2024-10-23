import NavButton from './IntroNav/NavButton';

const NavBar = () => {
  return (
    <div className="fixed h-20 w-full bg-sky-950 lg:hidden">
      <div className="flex flex-row-reverse justify-between">
        {/* Navigation */}
        <div className="mr-8 flex gap-4 text-[2.5rem] font-medium">
          <NavButton>About</NavButton>
          <NavButton>Experience</NavButton>
          <NavButton>Projects</NavButton>
        </div>

        <div>Socials</div>
      </div>
    </div>
  );
};
export default NavBar;
