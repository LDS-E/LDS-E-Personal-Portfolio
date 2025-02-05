import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsMenu from "./pages/ProjectsMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectDetails from "./pages/ProjectDetails.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/projects-menu" element={<ProjectsMenu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
