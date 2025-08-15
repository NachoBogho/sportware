import { useEffect, useState } from 'react';
import { fetchReservations, createReservation, updateReservation, deleteReservation } from '../services/reservationsApi';
import { Reservation } from '../types/reservation';

const useReservations = () => {
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

    const addReservation = async (reservation: Reservation) => {
        try {
            const newReservation = await createReservation(reservation);
            setReservations((prev) => [...prev, newReservation]);
        } catch (err) {
            setError('Error creating reservation');
        }
    };

    const editReservation = async (reservation: Reservation) => {
        try {
            const updatedReservation = await updateReservation(reservation);
            setReservations((prev) =>
                prev.map((res) => (res.id === updatedReservation.id ? updatedReservation : res))
            );
        } catch (err) {
            setError('Error updating reservation');
        }
    };

    const removeReservation = async (id: string) => {
        try {
            await deleteReservation(id);
            setReservations((prev) => prev.filter((res) => res.id !== id));
        } catch (err) {
            setError('Error deleting reservation');
        }
    };

    return {
        reservations,
        loading,
        error,
        addReservation,
        editReservation,
        removeReservation,
    };
};

export default useReservations;