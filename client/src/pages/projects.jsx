import { useContext } from "react";
import { ProjectsContext } from "../store/projects";

import {
  ProjectDetailView,
  ProjectsList,
  SearchBar,
} from "../components/components.js";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] =
    useContext(ProjectsContext).selected;
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      {selectedProject ? (
        <ProjectDetailView project={selectedProject} />
      ) : (
        <>
          <SearchBar />
          <ProjectsList />
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
