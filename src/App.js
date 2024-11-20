import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
        <Route
          path="/settings"
          element={<SettingsPage />}
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
