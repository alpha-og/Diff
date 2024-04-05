import { useContext } from "react";

import { ProjectsContext } from "../../store/projects";

const ProjectCard = ({ project }) => {
  const { name, description, techStacks, status, projectURL } = project;

  return (
    <div className="flex flex-col justify-between p-2 bg-white rounded-lg shadow-md overflow-hidden">
      <div>
        <h3 className="text-xl font-bold py-4 px-6 md:px-4">{name}</h3>
        <p className="text-gray-700 px-6 pb-2 md:px-4">{description}</p>
        <ul className="flex flex-wrap  gap-2 px-6 pb-4 md:px-4">
          {techStacks.map((tech) => (
            <li
              key={tech}
              className="text-gray-500 py-1 px-2 mr-2 rounded-full bg-gray-200"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 flex justify-between items-center">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : status === "completed"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800"
          }`}
        >
          {status}
        </span>
        <a
          href={projectURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          View Project
        </a>
                
      </div>
    </div>
  );
};

const ProjectsList = () => {
  const [projects, setProjects] = useContext(ProjectsContext).projects;
  return (
    <div className="grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
