import { useEffect, useState } from 'react';
import { fetchUsageReport, fetchRevenueReport } from '../services/reportsApi';
import { UsageReport, RevenueReport } from '../types/report';

const useReports = () => {
    const [usageReport, setUsageReport] = useState<UsageReport | null>(null);
    const [revenueReport, setRevenueReport] = useState<RevenueReport | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadReports = async () => {
            try {
                setLoading(true);
                const usageData = await fetchUsageReport();
                const revenueData = await fetchRevenueReport();
                setUsageReport(usageData);
                setRevenueReport(revenueData);
            } catch (err) {
                setError('Error fetching reports');
            } finally {
                setLoading(false);
            }
        };

        loadReports();
    }, []);

    return { usageReport, revenueReport, loading, error };
};

export default useReports;