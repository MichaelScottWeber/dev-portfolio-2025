'use client';

import { useState } from 'react';
import TabButton from './TabButton';
import ProjectSection from './ProjectSection';
import SkillsAndTechSection from './SkillsAndTechSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { ViewType } from '../types/portfolio';
import { useSkills, useProjects } from '../hooks/useFirebase';
import Loading from './Loading';
import Error from './Error';

function MainContent() {
  const [currentView, setCurrentView] = useState<ViewType>('projects');
  const { projects, projectsLoading, projectsError } = useProjects();
  const { skills, skillsLoading, skillsError } = useSkills();

  const renderContent = (view: string) => {
    if (view === 'projects') {
      return (
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentView}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <ProjectSection data={projects} />
          </motion.div>
        </AnimatePresence>
      );
    } else if (view === 'skills') {
      return (
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentView}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <SkillsAndTechSection data={skills} />
          </motion.div>
        </AnimatePresence>
      );
    } else if (view === 'about') {
      return (
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentView}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <AboutSection />
          </motion.div>
        </AnimatePresence>
      );
    }
  };

  return (
    <section className='w-full h-full md:p-5'>
      {projectsLoading || skillsLoading ? (
        <div className='flex justify-center items-center h-full'>
          <Loading />
        </div>
      ) : projectsError || skillsError ? (
        <Error error={projectsError || skillsError} />
      ) : (
        <>
          <div className='border-b border-gray-300 dark:border-gray-800 flex items-center justify-start'>
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
          <div className='flex flex-col justify-between h-7/8'>
            {renderContent(currentView)}
            <div className='md:hidden'>
              <Footer />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default MainContent;
