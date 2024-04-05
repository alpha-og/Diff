import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { User } from "./components/components.js";
import { Route, Routes } from "react-router-dom";
import { ProjectsPage } from "./pages/pages.js";

function App() {
  return (
    <>
      <User id="660f77dd191cb0e2c20d59b0" />
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
      );
}

export default App;
