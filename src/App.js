import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointments from "./components/Appointments";
import Doctors from "./components/Doctors";
import Patients from "./components/Patients";
import "./App.css";

const App = () => {
  const isLinkActive = (path) => window.location.pathname === path;
  return (
    <Router>
      <div className="container">
        <h1 style={{ color: "teal" }}>Hospital Managment System</h1>
        <nav>
          <div className="sidenav">
            <a
              className={isLinkActive("/appointments") ? "active" : ""}
              href="/appointments"
            >
              Appointments
            </a>
            <a
              className={isLinkActive("/appointments") ? "active" : ""}
              href="/patients"
            >
              Patients
            </a>
            <a
              className={isLinkActive("/appointments") ? "active" : ""}
              href="/doctors"
            >
              Doctors
            </a>
          </div>
        </nav>
        <Routes>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/" element={<Appointments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
