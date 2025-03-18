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
    <div>
      <h2>Projects</h2>
    </div>
  );
}

export default Projects;
