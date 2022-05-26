export interface Projects {
  projects: Project[];
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  link: string;
  github: string;
  school: null | boolean;
  languages: string[];
  thumbnail: string;
}
