import Project from './Project';
import { ProjectType } from '../types/portfolio';

type ProjectSectionProps = {
  data: ProjectType[];
};

function ProjectSection({ data }: ProjectSectionProps) {
  const renderProjectList = data?.map((project) => {
    return <Project key={project.name} data={project} />;
  });

  return (
    <div className='py-5'>
      <h2 className='text-xl text-black dark:text-white font-medium mb-4 md:mb-7'>
        Projects
      </h2>
      <span
        aria-hidden='true'
        className='text-xs text-gray-700 dark:text-gray-200/80 mb-4 inline-block md:hidden'
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
