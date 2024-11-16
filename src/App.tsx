import { useRef, useState } from 'react';
import About from './components/Content/About';
import Experience from './components/Content/Experience';
import Projects from './components/Content/Projects';
import ContentSection from './components/ContentSection';
import IntroNavSection from './components/IntroNavSection';
import ThemeSelector from './components/UI/ThemeSelector';
import ToggleButton from './components/UI/ToggleButton';
import { ISection } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [theme, setTheme] = useState('purple');

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
    <div
      className={
        'smooth-color bg-intro bg-cover bg-fixed bg-bottom bg-no-repeat font-openSans text-tBase'
      }
      data-mode={`${isDarkMode ? 'dark' : ''}`}
      data-theme={theme}
    >
      <ToggleButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ThemeSelector
        currentTheme={theme}
        setTheme={setTheme}
        isDarkMode={isDarkMode}
      />
      <div className="relative flex min-h-screen max-w-[110rem] flex-col bg-background/60 lg:mx-auto lg:px-20">
        <IntroNavSection sections={sections} />
        <ContentSection sections={sections} />
      </div>
    </div>
  );
}

export default App;
