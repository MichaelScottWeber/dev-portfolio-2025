import { useState } from 'react';
import TabButton from './TabButton';
import Projects from './Projects';
import SkillsAndTech from './SkillsAndTech';
import About from './About';

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
    <section>
      <div className='border-b border-gray-300 flex items-center justify-between'>
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
    </section>
  );
}

export default MainContent;
