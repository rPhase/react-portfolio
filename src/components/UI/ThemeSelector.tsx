import { themes } from '@/data/config-data';
interface Props {
  currentTheme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  isDarkMode: boolean;
}
const ThemeSelector = ({ currentTheme, setTheme, isDarkMode }: Props) => {
  return (
    <ul className="fixed left-20 top-4 z-50 flex flex-wrap gap-x-4 rounded-full bg-tBase p-2 lg:left-auto lg:right-7 lg:top-16 lg:flex-col lg:gap-y-4">
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
  );
};
export default ThemeSelector;
