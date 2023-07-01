import { style } from '@/app/styles/styles';
import { projects } from '@/constants';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <section className="my-20" id="projects">
      <h1 className="font-black text-gray-400 lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] mb-10 uppercase tracking-wider">
        PROJECTS
      </h1>
      <p className={`${style.subText} px-8`}>
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mx-3 my-10">
        {projects.map((project) => (
          <ProjectItem
            key={project.name}
            picture={project.pic}
            title={project.name}
            description={project.description}
            demo={project.demo}
            github={project.github}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
