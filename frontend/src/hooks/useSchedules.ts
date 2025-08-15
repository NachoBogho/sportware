import { useEffect, useState } from 'react';
import { fetchSchedules, createSchedule, updateSchedule, deleteSchedule } from '../services/schedulesApi';
import { Schedule } from '../types/schedule';

const useSchedules = () => {
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSchedules = async () => {
            try {
                const data = await fetchSchedules();
                setSchedules(data);
            } catch (err) {
                setError('Failed to load schedules');
            } finally {
                setLoading(false);
            }
        };

        loadSchedules();
    }, []);

    const addSchedule = async (schedule: Schedule) => {
        try {
            const newSchedule = await createSchedule(schedule);
            setSchedules((prev) => [...prev, newSchedule]);
        } catch (err) {
            setError('Failed to create schedule');
        }
    };

    const editSchedule = async (schedule: Schedule) => {
        try {
            const updatedSchedule = await updateSchedule(schedule);
            setSchedules((prev) =>
                prev.map((s) => (s.id === updatedSchedule.id ? updatedSchedule : s))
            );
        } catch (err) {
            setError('Failed to update schedule');
        }
    };

    const removeSchedule = async (id: string) => {
        try {
            await deleteSchedule(id);
            setSchedules((prev) => prev.filter((s) => s.id !== id));
        } catch (err) {
            setError('Failed to delete schedule');
        }
    };

    return {
        schedules,
        loading,
        error,
        addSchedule,
        editSchedule,
        removeSchedule,
    };
};

export default useSchedules;