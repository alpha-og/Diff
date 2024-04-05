import { Route, Routes } from "react-router-dom";
import { ProjectsPage } from "./pages/pages.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
