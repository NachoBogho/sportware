import React, { useEffect, useState } from 'react';
import { Court } from '../types/court';
import { fetchCourts } from '../services/courtsApi';
import CourtList from '../components/courts/CourtList';
import Loader from '../components/ui/Loader';

const CourtsPage: React.FC = () => {
    const [courts, setCourts] = useState<Court[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCourts = async () => {
            try {
                const data = await fetchCourts();
                setCourts(data);
            } catch (err) {
                setError('Failed to load courts');
            } finally {
                setLoading(false);
            }
        };

        loadCourts();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-white">Courts Management</h1>
            <CourtList courts={courts} />
        </div>
    );
};

export default CourtsPage;