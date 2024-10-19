import ContentSection from './components/ContentSection';
// import IntroSection from './components/IntroSection';

function App() {
  return (
    <div className='min-h-screen relative bg-gray-800 text-gray-200'>
      <div className='lg:max-w-screen-lg mx-auto px-8 '>
        {/* <IntroSection /> */}
        <ContentSection />
      </div>
    </div>
  );
}

export default App;
