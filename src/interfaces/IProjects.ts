export interface IProjects {
  id: number;
  focus: boolean;
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  link: string;
  github: string;
  school?: ISchoolProjects;
  functionalities: string[];
  languages: IProgramLanguages[];
}

interface ISchoolProjects {
  course: string;
  grade: string;
  brief: string;
}

interface IProgramLanguages {
  name: string;
}
