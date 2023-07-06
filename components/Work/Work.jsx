'use client';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/constants';
import ExperienceItem from './ExperienceItem';

const Work = () => {
  return (
    <>
      <h1 className="font-black px-2 text-gray-400 lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] mb-20 tracking-wider">
        Work Experience
      </h1>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Work;
