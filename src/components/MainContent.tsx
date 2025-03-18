import { useState } from 'react';
import TabButton from './TabButton';
import Projects from './Projects';
import SkillsAndTech from './SkillsAndTech';
import About from './About';
import Footer from './Footer';
import PortfolioData from '../assets/data/portfolioData.json';

type View = 'projects' | 'skills' | 'about';

function MainContent() {
  const [currentView, setCurrentView] = useState<View>('projects');

  const renderContent = (view: string) => {
    if (view === 'projects') {
      return <Projects />;
    } else if (view === 'skills') {
      return <SkillsAndTech />;
    } else if (view === 'about') {
      return <About />;
    }
  };

  return (
    <section className='w-full min-h-full md:p-5'>
      <div className='border-b border-gray-300 flex items-center justify-start'>
        <TabButton
          onClick={() => setCurrentView('projects')}
          selected={currentView === 'projects'}
        >
          Projects
        </TabButton>
        <TabButton
          onClick={() => setCurrentView('skills')}
          selected={currentView === 'skills'}
        >
          Skills & Tech
        </TabButton>
        <TabButton
          onClick={() => setCurrentView('about')}
          selected={currentView === 'about'}
        >
          About
        </TabButton>
      </div>
      {renderContent(currentView)}
      <div className='md:hidden'>
        <Footer />
      </div>
    </section>
  );
}

export default MainContent;
