import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

export const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/v1/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProjectsContext.Provider
      value={{ projects: [projects, setProjects], sort: [sort, setSort], selected: [selectedProject, setSelectedProject] }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
