'use client';

import { useState, useEffect } from 'react';
import GitHub from './icons/GitHub';
import Globe from './icons/Globe';
import * as motion from 'motion/react-client';
import { ProjectType } from '../types/portfolio';

type ProjectProps = {
  data: ProjectType;
};

function Project({ data }: ProjectProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [xValue, setXValue] = useState(-320);

  const projectClickHandler = () => setShowMoreInfo(!showMoreInfo);

  const motionVariants = {
    image: { x: 0 },
    info: { x: xValue },
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 25rem)');

    const changeHandler = (e: MediaQueryListEvent) => {
      setXValue(e.matches ? -320 : -384);
    };

    changeHandler(mediaQuery as unknown as MediaQueryListEvent);

    mediaQuery.addEventListener('change', changeHandler);
  }, []);

  return (
    <li className='w-80 xs:w-96 relative'>
      <div
        onClick={projectClickHandler}
        style={{ backgroundColor: data.color }}
        className='rounded cursor-pointer overflow-hidden max-w-full outline-2 outline-transparent hover:outline-secondary-500'
      >
        <motion.div
          animate={showMoreInfo ? 'info' : 'image'}
          transition={{ type: 'spring', duration: 1, bounce: 0.15 }}
          variants={motionVariants}
          className='flex w-[640px] xs:w-[768px]'
        >
          <div className='w-80 xs:w-96'>
            <img
              // height='240'
              className='max-w-full'
              src={data.img1}
              alt={`screenshots of ${data.name}`}
            />
          </div>
          <div className='relative w-80 xs:w-96'>
            <img
              // height='240'
              className='max-w-full'
              src={data.img2}
              alt={`screenshots of ${data.name}`}
            />
            <p className='text-white font-light absolute top-3 right-3 text-base w-4/7'>
              {data.desc}
            </p>
            <p className='text-white font-light absolute bottom-3 right-3 text-sm w-4/7'>
              Made with <br />
              {data.tech.join(', ')}
            </p>
          </div>
        </motion.div>
      </div>
      <div className='flex flex-col xs:flex-row gap-3 my-3 xs:items-center xs:justify-between'>
        <h3 className='text-base text-black dark:text-gray-200 font-semibold'>
          {data.name}
        </h3>
        <div className='flex gap-2'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='flex py-2 px-5 bg-primary-500 rounded border border-primary-500 text-gray-200 text-sm hover:bg-primary-700 hover:border-primary-700 transition-all'
            href={data.siteUrl}
          >
            <Globe classNames='w-4 mr-1' />
            Site
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='flex py-2 px-5 rounded border border-primary-500 text-black dark:text-gray-200 text-sm hover:bg-primary-700 hover:border-primary-700 hover:text-gray-200 transition-all'
            href={data.sourceUrl}
          >
            <GitHub classNames='w-4 mr-1' />
            Source
          </a>
        </div>
      </div>
    </li>
  );
}

export default Project;
