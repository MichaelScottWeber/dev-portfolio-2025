export type ProjectType = {
  id?: string;
  name: string;
  img1: string;
  img2: string;
  color: string;
  siteUrl: string;
  sourceUrl: string;
  desc: string;
  tech: string[];
};

export type SkillType = {
  name: string;
  tags: string[];
};

export type SkillsDataType = {
  skills: SkillType[];
  tags: string[];
};
