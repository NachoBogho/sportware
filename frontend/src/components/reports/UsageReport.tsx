import React, { useEffect, useState } from 'react';
import { fetchUsageReport } from '../../services/reportsApi';
import { UsageData } from '../../types/report';
import Chart from '../ui/Chart';
import Loader from '../ui/Loader';

const UsageReport: React.FC = () => {
    const [usageData, setUsageData] = useState<UsageData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadUsageData = async () => {
            try {
                const data = await fetchUsageReport();
                setUsageData(data);
            } catch (err) {
                setError('Error fetching usage data');
            } finally {
                setLoading(false);
            }
        };

        loadUsageData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Usage Report</h2>
            <Chart data={usageData} />
        </div>
    );
};

export default UsageReport;