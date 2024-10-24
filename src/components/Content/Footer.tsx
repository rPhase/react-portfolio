import { aboutData } from '@/data/about-data';
const Footer = () => {
  return (
    <footer className="space-y-2 pb-8 text-2xl lg:flex lg:justify-between">
      <ul className="flex justify-center space-x-2">
        <li>©</li>
        <li>{`${new Date().getFullYear()}`}</li>
        <li>-</li>
        <li>{aboutData.name}</li>
      </ul>
      <ul className="flex justify-center">
        <li>Powered by React, TypeScript, and Tailwind CSS.</li>
      </ul>
    </footer>
  );
};
export default Footer;
