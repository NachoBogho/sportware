import { Court } from '../../modules/courts/court.model';
import { Reservation } from '../../modules/reservations/reservation.model';
import { Schedule } from '../../modules/schedules/schedule.model';

const seedCourts = async () => {
    const courts = [
        { name: 'Football Field 1', type: 'football', price: 50 },
        { name: 'Football Field 2', type: 'football', price: 50 },
        { name: 'Tennis Court 1', type: 'tennis', price: 30 },
        { name: 'Tennis Court 2', type: 'tennis', price: 30 },
        { name: 'Paddle Court 1', type: 'paddle', price: 40 },
    ];

    await Court.insertMany(courts);
};

const seedReservations = async () => {
    const reservations = [
        { courtId: '1', clientName: 'John Doe', date: new Date(), time: '10:00', duration: 60 },
        { courtId: '2', clientName: 'Jane Smith', date: new Date(), time: '11:00', duration: 60 },
    ];

    await Reservation.insertMany(reservations);
};

const seedSchedules = async () => {
    const schedules = [
        { courtId: '1', date: new Date(), available: true },
        { courtId: '2', date: new Date(), available: true },
    ];

    await Schedule.insertMany(schedules);
};

const seedData = async () => {
    await seedCourts();
    await seedReservations();
    await seedSchedules();
};

export default seedData;