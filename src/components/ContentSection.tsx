// Main Content Section

import About from './Content/About';
import Experience from './Content/Experience';
import Footer from './Content/Footer';
import Projects from './Content/Projects';
import Intro from './IntroNav/Intro';
import Socials from './IntroNav/Socials';

const ContentSection = () => {
  return (
    <main className="bg-black px-8 pt-20 lg:ml-[35rem]">
      <div className="lg:hidden">
        <Intro />
        <Socials />
      </div>
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};
export default ContentSection;
