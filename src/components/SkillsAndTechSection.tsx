import { useState } from 'react';
import SearchPill from './SearchPill';

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
    return <li key={skill.name}>{skill.name}</li>;
  });

  return (
    <div className='py-5'>
      <h2 className='text-xl text-black font-medium mb-4 md:mb-7'>
        Skills and Tech
      </h2>
      <ul className='flex flex-wrap gap-2 mb-4'>{renderSearchTermList}</ul>
      <ul className='flex flex-wrap gap-2'>{renderSkillsList}</ul>
    </div>
  );
}

export default SkillsAndTechSection;
