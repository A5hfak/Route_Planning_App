import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { ParentComponent, Navbars, Sidebar } from "./components";
import { Dashboard, HistoryPage } from './pages';

function App() {
  const [sidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Router>
        <Sidebar />
        <div
          style={{
            flexGrow: 1,
            padding: "20px",
            transition: "margin-left 0.3s ease",
            marginLeft: sidebarOpen ? "250px" : "70px",
            marginTop: "-20px",
          }}
        >
          <Navbars />
          <div style={{ paddingTop: "70px" }}>
            <Routes>
              <Route path="/" element={<ParentComponent />} />
              <Route path="/new-plan" element={<Dashboard />} />
              <Route path="/history" element={<HistoryPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
