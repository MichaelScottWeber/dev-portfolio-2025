import { useState } from 'react';
import SearchPill from './SearchPill';
import SkillPill from './SkillPill';
import CheckSquare from './icons/CheckSquare';
import Layout from './icons/Layout';
import PenTool from './icons/PenTool';
import Share from './icons/Share';
import BookOpen from './icons/BookOpen';

type Skill = {
  name: string;
  tags: string[];
};

type SkillsData = {
  skills: Skill[];
  tags: string[];
};

type SkillsAndTechSectionProps = {
  data: SkillsData;
};

function SkillsAndTechSection({ data }: SkillsAndTechSectionProps) {
  const [selectedTag, setSelectedTag] = useState('');

  const handleSearchPillClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const renderSearchTermList = data.tags.map((tag) => {
    return (
      <li key={tag}>
        <SearchPill
          name={tag}
          selected={selectedTag === tag}
          onClick={handleSearchPillClick}
        />
      </li>
    );
  });

  const filterSkills = (list: Skill[]) => {
    if (!selectedTag) {
      return list;
    } else {
      return list.filter((skill) => skill.tags.includes(selectedTag));
    }
  };

  const renderSkillsList = filterSkills(data.skills).map((skill) => {
    return (
      <li key={skill.name}>
        <SkillPill skill={skill.name} />
      </li>
    );
  });

  return (
    <div className='py-5'>
      <h2 className='text-xl text-black dark:text-white font-medium mb-4 md:mb-7'>
        Skills and Tech
      </h2>
      <ul className='flex flex-wrap gap-2 mb-6'>{renderSearchTermList}</ul>
      <ul className='flex flex-wrap gap-4 mb-9'>{renderSkillsList}</ul>
      <div className='mb-6'>
        <h3 className='text-black dark:text-white text-lg font-medium flex mb-2'>
          <CheckSquare classNames='w-6 mr-2' /> Accessibility
        </h3>
        <p className='text-black dark:text-white text-base'>
          Experienced in semantic HTML structure, screen readers, and in writing
          code that is WCAG 2.1 compliant.
        </p>
      </div>
      <div className='mb-6'>
        <h3 className='text-black dark:text-white text-lg font-medium flex mb-2'>
          <Layout classNames='w-6 mr-2' /> Responsive Design
        </h3>
        <p className='text-black dark:text-white text-base'>
          Projects that look good on all devices and all browsers. If it doesn't
          work on mobile, then it doesn't work.
        </p>
      </div>
      <div className='mb-6'>
        <h3 className='text-black dark:text-white text-lg font-medium flex mb-2'>
          <PenTool classNames='w-6 mr-2' /> Image Design
        </h3>
        <p className='text-black dark:text-white text-base'>
          A keen eye for design, and skilled with Adobe Photoshop, Illustrator,
          and Figma.
        </p>
      </div>
      <div className='mb-6'>
        <h3 className='text-black dark:text-white text-lg font-medium flex mb-2'>
          <Share classNames='w-6 mr-2' /> Collaboration
        </h3>
        <p className='text-black dark:text-white text-base'>
          Experienced working onsite and remotely in cross-disceplanary teams.
          Excellent communication skills.
        </p>
      </div>
      <div className='mb-6'>
        <h3 className='text-black dark:text-white text-lg font-medium flex mb-2'>
          <BookOpen classNames='w-6 mr-2' /> Self-Motivation
        </h3>
        <p className='text-black dark:text-white text-base'>
          A self-taught developer who isn't afraid of a challenge and loves to
          attack problems head on. Always learning new things.
        </p>
      </div>
    </div>
  );
}

export default SkillsAndTechSection;
