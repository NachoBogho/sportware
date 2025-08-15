import React, { useEffect, useState } from 'react';
import { fetchRevenueReport } from '../../services/reportsApi';
import Chart from '../ui/Chart';
import Loader from '../ui/Loader';

const RevenueReport: React.FC = () => {
    const [revenueData, setRevenueData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getRevenueData = async () => {
            try {
                const data = await fetchRevenueReport();
                setRevenueData(data);
            } catch (err) {
                setError('Error fetching revenue data');
            } finally {
                setLoading(false);
            }
        };

        getRevenueData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-white">Revenue Report</h2>
            <Chart data={revenueData} />
        </div>
    );
};

export default RevenueReport;