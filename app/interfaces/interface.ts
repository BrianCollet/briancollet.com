interface Project {
  title: string;
  imageLight: string;
  blurHash: string;
  site: string;
  description: string;
  techStack: string[];
}

export interface ProjectProps {
  projects: Project[];
}

interface Skill {
  name: string;
  link: string;
  type: string;
  image: string;
}

export interface SkillProps {
  skills: Skill[];
}
