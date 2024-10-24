import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';

export interface ISkill {
  name: string;
  id: string;
  level: 'learning' | 'familiar';
  URL?: string;
  icon?: IconType;
  iconColor?: string;
}

interface IAbout {
  name: string;
  title: string;
  avatarSrc: string;
  description: string;
}

export const aboutData: IAbout = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  avatarSrc: 'avatar-1.jpg',
  description:
    'A developer passionate about creating efficient and user-friendly applications. Always eager to learn and adopt new technologies.',
};

export const skillsData: ISkill[] = [
  {
    name: 'Javascript',
    id: 'javascript',
    level: 'familiar',
    icon: IoLogoJavascript,
    iconColor: '#f0db4f',
    URL: 'https://ecma-international.org/publications-and-standards/standards/ecma-262/',
  },
  {
    name: 'TypeScript',
    id: 'typescript',
    level: 'familiar',
    icon: SiTypescript,
    iconColor: '#3178c6',
    URL: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    id: 'react',
    level: 'familiar',
    icon: FaReact,
    iconColor: '#58c4dc',
    URL: 'https://react.dev/',
  },
  {
    name: 'React Native',
    id: 'react-native',
    level: 'learning',
    icon: FaReact,
    iconColor: '#58c4dc',
    URL: 'https://reactnative.dev/',
  },
];
