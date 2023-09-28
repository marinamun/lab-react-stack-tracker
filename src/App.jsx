import "./App.css";
import technologiesJSON from "./technologies.json";
import companiesJSON from "./companies.json";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [tech, setTech] = useState(technologiesJSON);
  const [companies, setCompanies] = useState(companiesJSON);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage send={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
