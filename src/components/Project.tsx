'use client';

import { useState } from 'react';
import GitHub from './icons/GitHub';
import Globe from './icons/Globe';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

type Project = {
  name: string;
  img1: string;
  img2: string;
  color: string;
  siteUrl: string;
  sourceUrl: string;
  desc: string;
  tech: string[];
};

type ProjectProps = {
  data: Project;
};

function Project({ data }: ProjectProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const projectClickHandler = () => setShowMoreInfo(!showMoreInfo);

  const renderImageBlock = (moreInfo: boolean) => {
    if (moreInfo) {
      return (
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={showMoreInfo ? 1 : 0}
            initial={{ x: 400, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className='relative'>
              <img src={data.img2} alt='' />
              <p className='text-white font-light absolute top-3 right-3 text-base w-4/7'>
                {data.desc}
              </p>
              <p className='text-white font-light absolute bottom-3 right-3 text-sm w-4/7'>
                Made with <br />
                {data.tech.join(', ')}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      );
    } else {
      return (
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={showMoreInfo ? 1 : 0}
            initial={{ x: -400, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <img src={data.img1} alt='' />
            </div>
          </motion.div>
        </AnimatePresence>
      );
    }
  };

  return (
    <li className='max-w-md md:max-w-sm'>
      <div
        onClick={projectClickHandler}
        style={{ backgroundColor: data.color }}
        className='rounded cursor-pointer overflow-hidden'
      >
        {renderImageBlock(showMoreInfo)}
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
