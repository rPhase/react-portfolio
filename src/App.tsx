import ContentSection from './components/ContentSection';
import IntroNavSection from './components/IntroNavSection';
import NavBar from './components/NavBar';
import ToggleButton from './components/UI/ToggleButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-200">
      <ToggleButton />
      <div className="relative flex min-h-screen max-w-[110rem] flex-col lg:mx-auto">
        <NavBar />
        <IntroNavSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default App;
