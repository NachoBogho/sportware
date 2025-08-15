import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Chart } from '../ui/Chart';

const DashboardStats: React.FC = () => {
    const { recentReservations, weeklyStats, revenueSummary } = useSelector((state: RootState) => state.reports);

    return (
        <div className="p-4 bg-black text-white">
            <h2 className="text-2xl font-bold mb-4">Dashboard Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Recent Reservations</h3>
                    <ul>
                        {recentReservations.map((reservation) => (
                            <li key={reservation.id} className="border-b border-gray-600 py-2">
                                {reservation.date} - {reservation.court} - {reservation.client}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-green-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Weekly Statistics</h3>
                    <Chart data={weeklyStats} />
                </div>
                <div className="bg-green-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Revenue Summary</h3>
                    <p>Total Revenue: ${revenueSummary.total}</p>
                    <p>Average Revenue per Day: ${revenueSummary.average}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;