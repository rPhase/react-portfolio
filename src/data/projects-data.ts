export interface IProject {
  title: string;
  description: string[];
  imgSrc: string;
  url?: string;
  repo?: string;
  builtWith?: string[];
}

export const projects: IProject[] = [
  {
    title: "aliquid quae commodi",
    description: [
      "Quia dignissimos culpa eligendi animi sint iste hic.",
      "Perspiciatis natus eum praesentium eaque.",
    ],
    url: "https://www.example.com",
    imgSrc: "project-1.jpg",
    repo: "https://github.com/rPhase/react-portfolio",
    builtWith: ["JavaScript", "TypeScript", "ReactJS"],
  },
  {
    title: "sed amet laudantium",
    description: [
      "Quia dignissimos culpa eligendi animi sint iste hic.",
      "Ut vero vitae tempore voluptas quia aut est.",
      "Quis qui quia quo ut quibusdam ipsam aut et recusandae.",
    ],
    url: "https://www.example.com",
    imgSrc: "project-1.jpg",
    repo: "https://github.com/rPhase/react-portfolio",
    builtWith: [
      "TypeScript",
      "NextJS",
      "Tailwind CSS",
      "React",
      "Drizzle",
      "PostgreSQL",
      "Neon",
    ],
  },
  {
    title: "autem necessitatibus quibusdam",
    description: [
      "Quia dignissimos culpa eligendi animi sint iste hic.",
      "Repudiandae optio vero tempora necessitatibus cumque laboriosam natus qui et.",
    ],
    imgSrc: "project-1.jpg",
  },
];
