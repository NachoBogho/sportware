import { Reservation } from './reservation.model';
import { ReservationData } from './reservation.types';
import { validateReservation } from './reservation.validations';

export class ReservationService {
    async createReservation(data: ReservationData): Promise<Reservation> {
        const validationErrors = validateReservation(data);
        if (validationErrors.length > 0) {
            throw new Error(`Validation errors: ${validationErrors.join(', ')}`);
        }

        const reservation = new Reservation(data);
        return await reservation.save();
    }

    async updateReservation(id: string, data: ReservationData): Promise<Reservation | null> {
        const validationErrors = validateReservation(data);
        if (validationErrors.length > 0) {
            throw new Error(`Validation errors: ${validationErrors.join(', ')}`);
        }

        return await Reservation.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteReservation(id: string): Promise<Reservation | null> {
        return await Reservation.findByIdAndDelete(id);
    }

    async getReservationById(id: string): Promise<Reservation | null> {
        return await Reservation.findById(id);
    }

    async getAllReservations(): Promise<Reservation[]> {
        return await Reservation.find();
    }
}

export const reservationService = new ReservationService();
