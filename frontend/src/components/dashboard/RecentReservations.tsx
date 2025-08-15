import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Reservation } from '../../types/reservation';
import Table from '../ui/Table';

const RecentReservations: React.FC = () => {
    const reservations = useSelector((state: RootState) => state.reservations.items);

    const recentReservations: Reservation[] = reservations.slice(-5).reverse();

    return (
        <div className="bg-black p-4 rounded-lg shadow-lg">
            <h2 className="text-white text-xl font-semibold mb-4">Últimas Reservas</h2>
            <Table data={recentReservations} />
        </div>
    );
};

export default RecentReservations;