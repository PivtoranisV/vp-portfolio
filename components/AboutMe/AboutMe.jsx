import { intro } from '@/constants';
import { facts } from '@/constants';
import FactItem from './FactItem';
import IntroItem from './IntroItem';

const AboutMe = () => {
  return (
    <>
      <h1 className="font-black text-gray-400 lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] text-center mb-20 uppercase tracking-wider">
        Introduction
      </h1>
      <div className="flex items-center w-11/12 mx-auto">
        <div>
          {intro.map((element) => (
            <IntroItem
              key={element.id}
              title={element.title}
              descriptions={element.description}
            />
          ))}
        </div>
        <div className="hidden sm:flex flex-col gap-y-8">
          {facts.map((fact) => (
            <FactItem key={fact.id} pic={fact.pic} title={fact.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
