import { useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

const ToggleButton = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="group fixed left-4 top-3 z-50 rounded-full p-2 transition-all duration-300 ease-in-out lg:left-auto lg:right-10"
    >
      <div className="relative h-6 w-6">
        <LuSun
          className={`absolute transform transition-all duration-300 ease-in-out ${isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
          size={24}
        />
        <LuMoon
          className={`absolute transform transition-all duration-300 ease-in-out ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`}
          size={24}
        />
      </div>
    </button>
  );
};
export default ToggleButton;
