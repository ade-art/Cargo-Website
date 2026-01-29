import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ExportImports from "./pages/ExportImports";
import { AppNavbar } from "./components/Navbar"
import { Footersection } from "./components/Footer"
import './App.css'


function App() {
  return (
    <>
     <AppNavbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/ExportImports" element={<ExportImports />} />
      </Routes>
      <Footersection />
    </>
  );
}

export default App;

