import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import HireMe from "./pages/HireMe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<HireMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
