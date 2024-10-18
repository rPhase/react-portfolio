export interface IExperience {
  name: string;
  title: string;
  url?: string;
  imgSrc?: string;
  startDate: string;
  endDate?: string;
  description: string;
  techStack?: string[];
}

export const experience: IExperience[] = [
  {
    name: 'illum ex dolor',
    title: 'Developer',
    url: 'www.example.com',
    imgSrc: 'experience-1',
    startDate: '2020',
    endDate: '2024',
    description: 'Id et facilis enim. Libero hic animi.',
    techStack: ['JavaScript', 'TypeScript', 'NodeJS', 'ReactJS'],
  },
  {
    name: 'nisi ea autem',
    title: 'Developer',
    url: 'www.example.com',
    imgSrc: 'experience-1',
    startDate: '2018',
    endDate: '2020',
    description:
      'Sed magnam nisi libero cupiditate ab vel possimus. Quia eaque velit rerum dolorum. Hic doloribus sed. ',
    techStack: ['Python', 'C++', 'Java'],
  },
];
