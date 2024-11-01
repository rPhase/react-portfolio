import { useRef } from 'react';
import About from './components/Content/About';
import Experience from './components/Content/Experience';
import Projects from './components/Content/Projects';
import ContentSection from './components/ContentSection';
import IntroNavSection from './components/IntroNavSection';
import ToggleButton from './components/UI/ToggleButton';
import { ISection } from './types';

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const sections: ISection[] = [
    { id: 'about', label: 'About', ref: aboutRef, component: About },
    {
      id: 'experience',
      label: 'Experience',
      ref: experienceRef,
      component: Experience,
    },
    {
      id: 'projects',
      label: 'Projects',
      ref: projectsRef,
      component: Projects,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-gray-200">
      <ToggleButton />
      <div className="relative flex min-h-screen max-w-[110rem] flex-col lg:mx-auto">
        <IntroNavSection sections={sections} />
        <ContentSection sections={sections} />
      </div>
    </div>
  );
}

export default App;
