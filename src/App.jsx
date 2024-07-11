import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectsMenu from "./pages/ProjectsMenu";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projects-menu" element={<ProjectsMenu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
