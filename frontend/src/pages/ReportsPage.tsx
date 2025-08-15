import React, { useEffect, useState } from 'react';
import { fetchUsageReport, fetchRevenueReport } from '../services/reportsApi';
import ReportsFilters from '../components/reports/ReportsFilters';
import UsageReport from '../components/reports/UsageReport';
import RevenueReport from '../components/reports/RevenueReport';

const ReportsPage: React.FC = () => {
    const [usageData, setUsageData] = useState(null);
    const [revenueData, setRevenueData] = useState(null);
    const [filters, setFilters] = useState({ startDate: '', endDate: '', sport: '' });

    useEffect(() => {
        const loadReports = async () => {
            const usage = await fetchUsageReport(filters);
            const revenue = await fetchRevenueReport(filters);
            setUsageData(usage);
            setRevenueData(revenue);
        };

        loadReports();
    }, [filters]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-white">Reports</h1>
            <ReportsFilters filters={filters} setFilters={setFilters} />
            <div className="mt-4">
                <UsageReport data={usageData} />
                <RevenueReport data={revenueData} />
            </div>
        </div>
    );
};

export default ReportsPage;