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
    <main className="bg-black px-8 pt-20 lg:ml-[35rem]">
      <div className="lg:hidden">
        <Intro />
        <Socials />
      </div>
      {sections.map((section) => (
        <ScrollWrapper id={section.id} ref={section.ref}>
          <section.component />
        </ScrollWrapper>
      ))}
      <Footer />
    </main>
  );
};
export default ContentSection;
