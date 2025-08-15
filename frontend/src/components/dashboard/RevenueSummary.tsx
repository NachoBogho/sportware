import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { formatCurrency } from '../../utils/formatters';

const RevenueSummary: React.FC = () => {
    const totalRevenue = useSelector((state: RootState) => state.billing.totalRevenue);
    const totalReservations = useSelector((state: RootState) => state.reservations.totalCount);

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Resumen de Ingresos</h2>
            <div className="mt-2">
                <p className="text-white">Total de Ingresos: {formatCurrency(totalRevenue)}</p>
                <p className="text-white">Total de Reservas: {totalReservations}</p>
            </div>
        </div>
    );
};

export default RevenueSummary;