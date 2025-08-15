import { lazy } from 'react';

const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const ReservationsPage = lazy(() => import('../pages/ReservationsPage'));
const CourtsPage = lazy(() => import('../pages/CourtsPage'));
const SchedulesPage = lazy(() => import('../pages/SchedulesPage'));
const ReportsPage = lazy(() => import('../pages/ReportsPage'));
const BillingPage = lazy(() => import('../pages/BillingPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const LicensePage = lazy(() => import('../pages/LicensePage'));

const routes = [
  { path: '/', element: <DashboardPage /> },
  { path: '/reservations', element: <ReservationsPage /> },
  { path: '/courts', element: <CourtsPage /> },
  { path: '/schedules', element: <SchedulesPage /> },
  { path: '/reports', element: <ReportsPage /> },
  { path: '/billing', element: <BillingPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '/license', element: <LicensePage /> },
];

export default routes;