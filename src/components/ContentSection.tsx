// Main Content Section

import About from './Content/About';
import Experience from './Content/Experience';
import Footer from './Content/Footer';
import Projects from './Content/Projects';

const ContentSection = () => {
  return (
    <main className="bg-black px-8 pt-20 lg:ml-[35rem]">
      <div>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};
export default ContentSection;
