import { technologies } from '@/constants';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <section className="my-20">
      <h1 className="font-black text-gray-400 lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] text-center mt-20 uppercase tracking-wider">
        Skills
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 mx-3 my-10">
        {technologies.map((technology) => (
          <SkillItem
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
