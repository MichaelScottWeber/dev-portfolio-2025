import * as React from 'react';
import { useState } from 'react';
import GitHub from './icons/GitHub';
import Globe from './icons/Globe';

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
        <div className='relative'>
          <img src={data.img2} alt='' />
          <p className='text-white font-light absolute top-3 right-3 text-base w-4/7'>
            {data.desc}
          </p>
          <p className='text-white font-light absolute bottom-3 right-3 text-sm w-4/7'>
            Made with <br />
            {data.tech.toString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <img src={data.img1} alt='' />
        </div>
      );
    }
  };

  return (
    <li className='max-w-sm'>
      <div
        onClick={projectClickHandler}
        style={{ backgroundColor: data.color }}
        className='rounded'
      >
        {renderImageBlock(showMoreInfo)}
      </div>
      <div className='flex gap-3 my-3 items-center'>
        <h3 className='text-base text-black font-semibold'>{data.name}</h3>
        <a
          className='py-2 px-7 bg-primary-500 rounded  border border-primary-500 text-white text-sm'
          href={data.siteUrl}
        >
          <Globe />
          Site
        </a>
        <a
          className='py-2 px-7 rounded border border-primary-500 text-black text-sm'
          href={data.sourceUrl}
        >
          Source
        </a>
      </div>
    </li>
  );
}

export default Project;
