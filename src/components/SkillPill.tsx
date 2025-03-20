type SkillPillProps = {
  skill: string;
};

function SkillPill({ skill }: SkillPillProps) {
  return (
    <span className='rounded-full bg-gray-300 py-1 px-3 text-sm'>{skill}</span>
  );
}

export default SkillPill;
