export interface IExperience {
  name: string;
  title: string;
  url?: string;
  imgSrc?: string;
  startDate: string;
  endDate?: string;
  description: string;
  bulletPoints?: string[];
  techStack?: string[];
}

export const experience: IExperience[] = [
  {
    name: 'illum ex dolor',
    title: 'Developer',
    url: 'www.example.com',
    imgSrc: 'experience-1',
    startDate: 'June 2020',
    description:
      'Id et facilis enim. Libero hic animi. Repudiandae commodi ut soluta. Et quam quidem ipsum libero maxime vel. Ut quam quasi qui. Natus natus quis recusandae.',
    bulletPoints: [
      'Ut vero et iure.',
      'Sit alias voluptatum reprehenderit nulla non.',
      'Quidem eos et.',
    ],
    techStack: ['JavaScript', 'TypeScript', 'NodeJS', 'ReactJS'],
  },
  {
    name: 'nisi ea autem',
    title: 'Developer',
    url: 'www.example.com',
    imgSrc: 'experience-1',
    startDate: '2018',
    endDate: 'April 2020',
    description:
      'Sed magnam nisi libero cupiditate ab vel possimus. Quia eaque velit rerum dolorum. Hic doloribus sed. ',
    techStack: ['Python', 'C++', 'Java'],
  },
];
