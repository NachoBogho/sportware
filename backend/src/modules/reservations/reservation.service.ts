import Reservation from './reservation.model';
import { CreateReservationInput, UpdateReservationInput } from './reservation.types';
import { validateReservation } from './reservation.validations';

export class ReservationService {
    async create(data: CreateReservationInput) {
        const validationErrors = validateReservation(data);
        if (validationErrors.length > 0) {
            throw new Error(`Validation errors: ${validationErrors.join(', ')}`);
        }

        const reservation = new Reservation(data);
        return await reservation.save();
    }

    async update(id: string, data: UpdateReservationInput) {
        const validationErrors = validateReservation(data);
        if (validationErrors.length > 0) {
            throw new Error(`Validation errors: ${validationErrors.join(', ')}`);
        }

        return await Reservation.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await Reservation.findByIdAndDelete(id);
    }

    async getById(id: string) {
        return await Reservation.findById(id);
    }

    async getAll() {
        return await Reservation.find();
    }
}

export const reservationService = new ReservationService();