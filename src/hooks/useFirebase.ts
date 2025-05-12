import { useState, useEffect } from 'react';
import { fetchCollection, fetchDocument } from '../firebase/firebaseUtils';
import { ProjectType, SkillsDataType } from '../types/portfolio';

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [projectsLoading, setProjectsLoading] = useState<boolean>(true);
  const [projectsError, setprojectsError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsData = await fetchCollection<Omit<ProjectType, 'id'>>(
          'projects'
        );
        setProjects(projectsData);
        setProjectsLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setprojectsError(err instanceof Error ? err.message : 'Unknown error');
        setProjectsLoading(false);
      }
    };

    getProjects();
  }, []);

  return { projects, projectsLoading, projectsError };
};

export const useSkills = () => {
  const [skills, setSkills] = useState<SkillsDataType>({
    skills: [],
    tags: [],
  });
  const [skillsLoading, setskillsLoading] = useState<boolean>(true);
  const [skillsError, setSkillsError] = useState<string | null>(null);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const skillsData = await fetchDocument<SkillsDataType>(
          'skills',
          'skillsList'
        );
        setSkills(skillsData || { skills: [], tags: [] });
        setskillsLoading(false);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setSkillsError(err instanceof Error ? err.message : 'Unknown error');
        setskillsLoading(false);
      }
    };

    getSkills();
  }, []);

  return { skills, skillsLoading, skillsError };
};
