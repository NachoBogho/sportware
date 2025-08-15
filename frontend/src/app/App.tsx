import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ReservationsPage from '../pages/ReservationsPage';
import CourtsPage from '../pages/CourtsPage';
import SchedulesPage from '../pages/SchedulesPage';
import ReportsPage from '../pages/ReportsPage';
import BillingPage from '../pages/BillingPage';
import SettingsPage from '../pages/SettingsPage';
import LicensePage from '../pages/LicensePage';
import ThemeProvider from '../providers/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/courts" element={<CourtsPage />} />
          <Route path="/schedules" element={<SchedulesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/license" element={<LicensePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;