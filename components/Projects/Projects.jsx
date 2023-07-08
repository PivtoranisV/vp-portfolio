import { style } from '@/app/styles/styles';
import { projects } from '@/constants';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <section className="my-44" id="projects">
      <h1 className="px-2 font-black text-white lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] mb-10 tracking-wider">
        Projects
      </h1>
      <p className={`${style.subText} px-8`}>
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mx-3 my-10">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.name}
            picture={project.pic}
            title={project.name}
            description={project.description}
            demo={project.demo}
            github={project.github}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
