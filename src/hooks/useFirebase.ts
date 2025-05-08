import { useState, useEffect } from 'react';
import { fetchCollection, fetchDocument } from '../firebase/firebaseUtils';
import { ProjectType, SkillsDataType } from '../types/portfolio';

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsData = await fetchCollection<Omit<ProjectType, 'id'>>(
          'projects'
        );
        setProjects(projectsData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { projects, loading, error };
};

export const useSkills = () => {
  const [skills, setSkills] = useState<SkillsDataType>({
    skills: [],
    tags: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const skillsData = await fetchDocument<SkillsDataType>(
          'skills',
          'skillsList'
        );
        setSkills(skillsData || { skills: [], tags: [] });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    getSkills();
  }, []);

  return { skills, loading, error };
};
