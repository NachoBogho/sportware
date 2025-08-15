import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSchedules } from '../../hooks/useSchedules';

const ScheduleCalendar: React.FC = () => {
    const { schedules, fetchSchedules } = useSchedules();
    const [date, setDate] = React.useState<Date | null>(new Date());

    React.useEffect(() => {
        fetchSchedules(date);
    }, [date, fetchSchedules]);

    const handleDateChange = (newDate: Date) => {
        setDate(newDate);
    };

    return (
        <div className="bg-black text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Schedule Calendar</h2>
            <Calendar
                onChange={handleDateChange}
                value={date}
                className="text-green-500"
            />
            <div className="mt-4">
                <h3 className="text-xl font-semibold">Scheduled Events</h3>
                <ul>
                    {schedules.map((schedule) => (
                        <li key={schedule.id} className="my-2">
                            {schedule.title} - {schedule.time}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ScheduleCalendar;