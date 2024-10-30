import { useEffect, useRef, useState } from 'react';
import ContentSection from './components/ContentSection';
import IntroNavSection from './components/IntroNavSection';
import ToggleButton from './components/UI/ToggleButton';
import { ISection } from './types';

const threshold = 100;

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const sections: ISection[] = [
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'experience', label: 'Experience', ref: experienceRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
  ];

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
    <div className="min-h-screen bg-gray-800 text-gray-200">
      <ToggleButton />
      <div className="relative flex min-h-screen max-w-[110rem] flex-col lg:mx-auto">
        <IntroNavSection
          sections={sections}
          onSectionClick={scrollToSection}
          activeSection={activeSection}
        />
        <ContentSection sections={sections} />
      </div>
    </div>
  );
}

export default App;
