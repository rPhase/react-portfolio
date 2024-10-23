// Main Content Section

import About from './Content/About';
import Experience from './Content/Experience';
import Footer from './Content/Footer';
import Projects from './Content/Projects';

const ContentSection = () => {
  return (
    <div className="bg-black px-8 lg:ml-96">
      <div>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};
export default ContentSection;
