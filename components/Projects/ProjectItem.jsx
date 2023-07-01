'use client';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';

const ProjectItem = ({ picture, title, description, demo, github, tags }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="flex justify-between text-[30px] sm:text-[40px] text-gray-400 mb-5">
        <a href={github} target="_blank">
          <AiFillGithub />
        </a>
        <a href={demo} target="_blank">
          <AiFillEye />
        </a>
      </div>
      <div>
        <Image
          src={picture}
          width={250}
          height={250}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-gray-400 text-[14px] text-justify">
          {description}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${title}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

export default ProjectItem;
