export interface Post {
  body: string;
  id: number;
  title: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  archived?: boolean;
}

export interface SiteLink {
  title: string;
  link: string;
}
