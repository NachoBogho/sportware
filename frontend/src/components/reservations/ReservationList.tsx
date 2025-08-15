import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import ReservationItem from './ReservationItem';

const ReservationList: React.FC = () => {
    const reservations = useSelector((state: RootState) => state.reservations.items);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-white mb-4">Lista de Reservas</h2>
            <div className="bg-gray-800 rounded-lg shadow-md">
                {reservations.length === 0 ? (
                    <p className="text-white text-center p-4">No hay reservas disponibles.</p>
                ) : (
                    <ul className="divide-y divide-gray-700">
                        {reservations.map((reservation) => (
                            <ReservationItem key={reservation.id} reservation={reservation} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ReservationList;