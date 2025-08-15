import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useReservations } from '../../hooks/useReservations';

const ReservationCalendar: React.FC = () => {
    const { reservations, fetchReservations } = useReservations();
    const [date, setDate] = React.useState<Date | null>(new Date());

    React.useEffect(() => {
        fetchReservations();
    }, [fetchReservations]);

    const handleDateChange = (newDate: Date) => {
        setDate(newDate);
    };

    const getReservationsForDate = (date: Date) => {
        return reservations.filter(reservation => {
            const reservationDate = new Date(reservation.date);
            return reservationDate.toDateString() === date.toDateString();
        });
    };

    return (
        <div className="bg-black text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Reservas del Día</h2>
            <Calendar
                onChange={handleDateChange}
                value={date}
                className="border border-green-600"
            />
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Reservas para {date?.toDateString()}</h3>
                <ul>
                    {getReservationsForDate(date!).map(reservation => (
                        <li key={reservation.id} className="mt-2">
                            {reservation.time} - {reservation.clientName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ReservationCalendar;