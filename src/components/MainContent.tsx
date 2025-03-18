import { useState } from 'react';
import TabButton from './TabButton';

type View = 'projects' | 'skills' | 'about';

function MainContent() {
  const [currentView, setCurrentView] = useState<View>('projects');

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
      <div>
        <span>PROJECTS</span>
        <span>SKILLS & TECH</span>
        <span>ABOUT</span>
      </div>
    </section>
  );
}

export default MainContent;
