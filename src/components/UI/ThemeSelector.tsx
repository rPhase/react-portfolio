import { themes } from '@/data/config-data';
import { useState } from 'react';
import { FaGear } from 'react-icons/fa6';
interface Props {
  currentTheme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  isDarkMode: boolean;
}
const ThemeSelector = ({ currentTheme, setTheme, isDarkMode }: Props) => {
  const [visible, setIsVisible] = useState(false);
  const animateClasses = `transition-all duration-300 ease-in-out ${
    visible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 -translate-y-full invisible'
  }`;
  return (
    <>
      <button
        className="fixed left-16 top-3 z-50 p-2"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <FaGear size={24} />
      </button>
      <ul
        className={`fixed left-4 top-20 z-50 flex flex-wrap gap-x-4 rounded-full bg-tBase p-2 lg:left-[4.2rem] lg:top-16 lg:flex-col lg:gap-y-4 ${animateClasses}`}
      >
        {themes.map((theme) => (
          <li
            key={theme}
            data-theme={theme}
            data-mode={`${isDarkMode ? 'dark' : ''}`}
          >
            <button
              className={`size-8 rounded-full bg-primary/90 ring-2 ${currentTheme === theme ? 'ring-secondary' : 'ring-transparent'} `}
              onClick={() => setTheme(theme)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ThemeSelector;
