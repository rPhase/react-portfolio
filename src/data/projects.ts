export interface IProject {
  title: string;
  description: string;
  imgSrc: string;
  url?: string;
  repo?: string;
  builtWith?: string[];
}

export const projects: IProject[] = [
  {
    title: 'aliquid quae commodi',
    description: 'Quia dignissimos culpa eligendi animi sint iste hic.',
    url: 'https://www.example.com',
    imgSrc: 'project-1.jpg',
    repo: 'https://github.com/rPhase/react-portfolio',
  },
  {
    title: 'sed amet laudantium',
    description: 'Quia dignissimos culpa eligendi animi sint iste hic.',
    url: 'https://www.example.com',
    imgSrc: 'project-1.jpg',
    repo: 'https://github.com/rPhase/react-portfolio',
  },
  {
    title: 'autem necessitatibus quibusdam',
    description: 'Quia dignissimos culpa eligendi animi sint iste hic.',
    url: 'https://www.example.com',
    imgSrc: 'project-1.jpg',
    repo: 'https://github.com/rPhase/react-portfolio',
  },
];
