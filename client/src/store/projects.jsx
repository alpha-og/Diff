import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

export const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

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
    <ProjectsContext.Provider value={{ projects: [projects, setProjects] }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
