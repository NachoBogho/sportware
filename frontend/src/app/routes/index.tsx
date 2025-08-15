import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ReservationsPage from '../pages/ReservationsPage';
import CourtsPage from '../pages/CourtsPage';
import SchedulesPage from '../pages/SchedulesPage';
import ReportsPage from '../pages/ReportsPage';
import BillingPage from '../pages/BillingPage';
import SettingsPage from '../pages/SettingsPage';
import LicensePage from '../pages/LicensePage';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={DashboardPage} />
                <Route path="/reservations" component={ReservationsPage} />
                <Route path="/courts" component={CourtsPage} />
                <Route path="/schedules" component={SchedulesPage} />
                <Route path="/reports" component={ReportsPage} />
                <Route path="/billing" component={BillingPage} />
                <Route path="/settings" component={SettingsPage} />
                <Route path="/license" component={LicensePage} />
            </Switch>
        </Router>
    );
};

export default Routes;