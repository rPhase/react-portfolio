import { aboutData } from '@/data/about-data';
const Footer = () => {
  return (
    <footer className="space-y-2 pb-8 text-2xl lg:flex lg:justify-between lg:space-y-0">
      <ul className="flex justify-center space-x-2">
        <li>©</li>
        <li>{`${new Date().getFullYear()}`}</li>
        <li>-</li>
        <li>{aboutData.name}</li>
      </ul>
      <ul className="flex flex-col text-center lg:flex-row lg:gap-x-2">
        <li>Powered by React, TypeScript, and Tailwind CSS.</li>
        <li>
          Icons by{' '}
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Icons8
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
