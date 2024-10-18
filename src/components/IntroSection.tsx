// Intro Section

import { about } from '@/data/about';

const IntroSection = () => {
  return (
    <div>
      <div>
        <h1>{about.name}</h1>
        <h2>{about.title}</h2>
        <p>{about.description}</p>
      </div>
      <div>
        <p>About</p>
        <p>Experience</p>
        <p>Projects</p>
      </div>
    </div>
  );
};
export default IntroSection;
