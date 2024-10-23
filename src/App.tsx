import ContentSection from './components/ContentSection';
import IntroNavSection from './components/IntroNavSection';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-800 text-gray-200">
      <div className="">
        <IntroNavSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default App;
