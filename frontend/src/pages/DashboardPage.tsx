import React from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import RecentReservations from '../components/dashboard/RecentReservations';
import RevenueSummary from '../components/dashboard/RevenueSummary';

const DashboardPage: React.FC = () => {
    return (
        <div className="flex flex-col p-4 bg-black text-white">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <DashboardStats />
            <RecentReservations />
            <RevenueSummary />
        </div>
    );
};

export default DashboardPage;