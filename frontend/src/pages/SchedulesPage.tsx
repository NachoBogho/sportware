import React from 'react';
import ScheduleCalendar from '../components/schedules/ScheduleCalendar';
import MaintenanceBlockForm from '../components/schedules/MaintenanceBlockForm';

const SchedulesPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-black text-white">
            <h1 className="text-2xl font-bold mb-4">Gestión de Horarios</h1>
            <ScheduleCalendar />
            <MaintenanceBlockForm />
        </div>
    );
};

export default SchedulesPage;