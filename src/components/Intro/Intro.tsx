import avatar from '@/assets/images/about/avatar-1.jpg';
import { about } from '@/data/about-data';
const Intro = () => {
  return (
    <div className='flex flex-col gap-12 mb-24'>
      <div className='flex items-center'>
        <img src={avatar} alt='avatar' className='rounded-full h-28 mr-4' />
        <div className='text-gray-50'>
          <h1 className='text-5xl font-bold'>{about.name}</h1>
          <h2 className='text-[2rem] capitalize'>{about.title}</h2>
        </div>
      </div>
      <p className='w-4/5 text-[1.25rem] text-gray-100'>{about.description}</p>
    </div>
  );
};
export default Intro;
