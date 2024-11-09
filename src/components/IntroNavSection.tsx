import { ISection } from '@/types';
import { useEffect, useState } from 'react';
import Intro from './IntroNav/Intro';
import NavButton from './IntroNav/NavButton';
import Socials from './IntroNav/Socials';

interface Props {
  sections: ISection[];
}

const threshold = 100;

const IntroNavSection = ({ sections }: Props) => {
  const [activeSection, setActiveSection] = useState('about');

  // Check for the scroll position to activate a tab
  // Also check if bottom
  const checkScrollPosition = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const lastSection = sections.length - 1;

    // Calculate distance from bottom
    const distanceBottom = documentHeight - (scrollTop + windowHeight);

    sections.forEach(({ ref, id }, index) => {
      const sectionTop = ref.current!.offsetTop;

      if (scrollTop >= sectionTop - 100 && scrollTop <= sectionTop + 100) {
        setActiveSection(id);
      }

      if (index === lastSection && distanceBottom <= threshold) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => window.removeEventListener('scroll', checkScrollPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-bgPrimary dark:bg-bgPrimaryDark fixed flex h-20 w-full lg:h-full lg:w-[35rem] lg:flex-col lg:gap-32">
      <div className="hidden lg:block">
        <Intro />
      </div>

      {/* Navigation */}
      <div className="ml-auto mr-8 flex items-center gap-4 text-[2rem] font-medium lg:mx-0 lg:flex-1 lg:flex-col lg:items-start lg:justify-start lg:gap-2">
        {sections.map((section) => (
          <NavButton
            key={section.id}
            onClick={() => scrollToSection(section.ref)}
            active={section.id === activeSection}
          >
            {section.label}
          </NavButton>
        ))}
      </div>

      <div className="hidden lg:block">
        <Socials />
      </div>
    </div>
  );
};
export default IntroNavSection;
