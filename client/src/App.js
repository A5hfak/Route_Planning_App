import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ParentComponent, Navbars, Sidebar } from "./components";
import { Dashboard, HelpPage, HistoryPanel, LoginPage, ProfilePage } from './pages';
import { RoutePlans, WeatherPage } from './pages';
import { AuthProvider } from './AuthContext';
// import PrivateRoute from './privateRoute';
import './App.css';

function App() {
  const [sidebarOpen] = useState(false);

  return (
    <AuthProvider>
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
                {/* Default route */}
                <Route path="/" element={<ParentComponent />} />

                {/* Public routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/new-plan" element={<Dashboard />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/routeplan" element={<RoutePlans />} />
                <Route path="/history" element={<HistoryPanel />} />

                {/* Protected routes */}
                {/* <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/new-plan"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/weather"
                  element={
                    <PrivateRoute>
                      <WeatherForeCast />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/routeplan"
                  element={
                    <PrivateRoute>
                      <RoutePlans />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/history"
                  element={
                    <PrivateRoute>
                      <HistoryPanel />
                    </PrivateRoute>
                  }
                /> */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
