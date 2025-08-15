import React from 'react';
import { useCourts } from '../../hooks/useCourts';
import CourtCard from './CourtCard';

const CourtList: React.FC = () => {
    const { courts, isLoading, error } = useCourts();

    if (isLoading) {
        return <div className="text-white">Loading courts...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error loading courts: {error.message}</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courts.map(court => (
                <CourtCard key={court.id} court={court} />
            ))}
        </div>
    );
};

export default CourtList;