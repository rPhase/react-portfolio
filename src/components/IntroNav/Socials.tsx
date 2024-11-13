import { socialsData } from '@/data/about-data';
const Socials = () => {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-3 pb-8 text-5xl">
      {socialsData.map((item) => {
        return (
          <li key={item.name}>
            <a href={item.URL} target="_blank" rel="noreferrer noopener">
              <item.icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Socials;
