import { useRef, useState } from 'react';
import ContentSection from './components/ContentSection';
import IntroNavSection from './components/IntroNavSection';
import ToggleButton from './components/UI/ToggleButton';
import { ISection } from './types';

function App() {
  // const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const sections: ISection[] = [
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'experience', label: 'Experience', ref: experienceRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-200">
      <ToggleButton />
      <div className="relative flex min-h-screen max-w-[110rem] flex-col lg:mx-auto">
        <IntroNavSection sections={sections} onSectionClick={scrollToSection} />
        <ContentSection sections={sections} />
      </div>
    </div>
  );
}

export default App;
