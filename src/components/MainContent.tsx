import { useState } from 'react';
import TabButton from './TabButton';
import ProjectSection from './ProjectSection';
import SkillsAndTechSection from './SkillsAndTechSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import PortfolioData from '../assets/data/portfolioData.json';

type View = 'projects' | 'skills' | 'about';

function MainContent() {
  const [currentView, setCurrentView] = useState<View>('projects');

  const renderContent = (view: string) => {
    if (view === 'projects') {
      return <ProjectSection data={PortfolioData.projects} />;
    } else if (view === 'skills') {
      return <SkillsAndTechSection />;
    } else if (view === 'about') {
      return <AboutSection />;
    }
  };

  return (
    <section className='w-full md:p-5'>
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
