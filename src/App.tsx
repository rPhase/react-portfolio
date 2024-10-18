import ContentSection from './components/ContentSection';
import IntroSection from './components/IntroSection';

function App() {
  return (
    <div className='min-h-screen min-w-screen relative bg-gray-800 text-gray-200'>
      <div className=''>
        <IntroSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default App;
