import { ISection } from '@/types';
import About from './Content/About';
import Experience from './Content/Experience';
import Footer from './Content/Footer';
import Projects from './Content/Projects';
import Intro from './IntroNav/Intro';
import ScrollWrapper from './IntroNav/ScrollWrapper';
import Socials from './IntroNav/Socials';

interface Props {
  sections: ISection[];
}

const ContentSection = ({ sections }: Props) => {
  return (
    <main className="bg-black px-8 pt-20 lg:ml-[35rem]">
      <div className="lg:hidden">
        <Intro />
        <Socials />
      </div>
      <ScrollWrapper id={sections[0].id} ref={sections[0].ref}>
        <About />
      </ScrollWrapper>
      <ScrollWrapper id={sections[1].id} ref={sections[1].ref}>
        <Experience />
      </ScrollWrapper>
      <ScrollWrapper id={sections[2].id} ref={sections[2].ref}>
        <Projects />
      </ScrollWrapper>
      <Footer />
    </main>
  );
};
export default ContentSection;
