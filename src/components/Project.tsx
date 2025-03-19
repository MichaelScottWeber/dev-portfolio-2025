import * as React from 'react';
import { useState } from 'react';

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
  return (
    <li style={{ backgroundColor: data.color }} className=''>
      <p>{data.name}</p>
      <img src={data.img1} alt='' />
      <img src={data.img2} alt='' />
      <a href={data.siteUrl}>Site</a>
      <a href={data.sourceUrl}>Source</a>
      <p>{data.desc}</p>
      <p>{data.tech.toString()}</p>
    </li>
  );
}

export default Project;
