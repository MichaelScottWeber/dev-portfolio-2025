import Project from './Project';

type ProjectData = {
  name: string;
  img1: string;
  img2: string;
  color: string;
  siteUrl: string;
  sourceUrl: string;
  desc: string;
  tech: string[];
};

type ProjectSectionProps = {
  data: ProjectData[];
};

function ProjectSection({ data }: ProjectSectionProps) {
  const renderProjectList = data.map((project) => {
    return <Project key={project.name} data={project} />;
  });

  return (
    <div className='py-5'>
      <h2 className='text-xl text-black font-medium'>Projects</h2>
      <p className='text-sm text-gray-800 mb-4 md:mb-7'>
        These are a few of the personal projects I've built over the years.
      </p>
      <span
        aria-hidden='true'
        className='text-xs text-gray-700 mb-4 inline-block md:hidden'
      >
        *Tap on a project for more info
      </span>
      <ul className='flex flex-col md:flex-row md:flex-wrap gap-5 gap-2 items-center justify-center'>
        {renderProjectList}
      </ul>
    </div>
  );
}

export default ProjectSection;
