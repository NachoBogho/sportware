import React, { useEffect, useState } from 'react';
import ReservationForm from '../components/reservations/ReservationForm';
import ReservationList from '../components/reservations/ReservationList';
import ReservationCalendar from '../components/reservations/ReservationCalendar';
import { fetchReservations } from '../services/reservationsApi';
import { Reservation } from '../types/reservation';

const ReservationsPage: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadReservations = async () => {
            try {
                const data = await fetchReservations();
                setReservations(data);
            } catch (err) {
                setError('Error fetching reservations');
            } finally {
                setLoading(false);
            }
        };

        loadReservations();
    }, []);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl text-white mb-4">Manage Reservations</h1>
            <ReservationForm setReservations={setReservations} />
            <ReservationCalendar reservations={reservations} />
            <ReservationList reservations={reservations} />
        </div>
    );
};

export default ReservationsPage;