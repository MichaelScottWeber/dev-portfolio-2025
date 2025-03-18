type Project = {
  name: string;
  img1: string;
  img2: string;
  color: string;
  siteUrl: string;
  sourceUrl: string;
  desc: string;
  tech: Array<string>;
};

type ProjectsProps = {
  data: Project[];
};

function Projects({ data }: ProjectsProps) {
  return (
    <div className='py-5'>
      <h2 className='text-xl text-black font-medium'>Projects</h2>
      <p className='text-sm text-black mb-2'>
        These are a few of the personal projects I've built over the years.
      </p>
      <span className='text-xs text-gray-700'>
        *Tap on a project for more info
      </span>
    </div>
  );
}

export default Projects;
