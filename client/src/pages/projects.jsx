import { useContext } from "react";
import { ProjectsContext } from "../store/projects";
import { PlusIcon } from "lucide-react";
import {
  ProjectDetailView,
  ProjectsList,
  SearchBar,
  ProjectCreateForm,
} from "../components/components.js";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] =
    useContext(ProjectsContext).selected;
  const [formVisible, setFormVisible] = useContext(ProjectsContext).form;
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      {!selectedProject && !formVisible && (
        <>
          <div className="flex gap-4">
            <SearchBar />
            <button
              onClick={() => setFormVisible(true)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
            >
              <PlusIcon size={24} />
            </button>
          </div>
          <ProjectsList />
        </>
      )}
      {selectedProject && <ProjectDetailView />}
      {formVisible && <ProjectCreateForm />}
    </div>
  );
};

export default ProjectsPage;
