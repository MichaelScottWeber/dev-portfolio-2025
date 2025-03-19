import { useState } from 'react';
import SearchPill from './SearchPill';

type SkillsList = {
  name: string;
  tags: string[];
};

type SkillsData = {
  skills: SkillsList[];
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

  return (
    <div className='py-5'>
      <h2 className='text-xl text-black font-medium mb-4 md:mb-7'>
        Skills and Tech
      </h2>
      <ul className='flex flex-wrap gap-2'>{renderSearchTermList}</ul>
    </div>
  );
}

export default SkillsAndTechSection;
