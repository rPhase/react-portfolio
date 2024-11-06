import { ISection } from '@/types';
import Footer from './Content/Footer';
import Intro from './IntroNav/Intro';
import ScrollWrapper from './IntroNav/ScrollWrapper';
import Socials from './IntroNav/Socials';

interface Props {
  sections: ISection[];
}

const ContentSection = ({ sections }: Props) => {
  return (
    <main className="bg-slate-400 px-8 pt-20 lg:ml-[35rem] dark:bg-black">
      <div className="lg:hidden">
        <Intro />
        <Socials />
      </div>
      {sections.map((section) => (
        <ScrollWrapper key={section.id} id={section.id} ref={section.ref}>
          <section.component />
        </ScrollWrapper>
      ))}
      <Footer />
    </main>
  );
};
export default ContentSection;
