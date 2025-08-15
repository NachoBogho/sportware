import { Request, Response } from 'express';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation.types';
import { validateReservation } from './reservation.validations';

export class ReservationController {
    private reservationService: ReservationService;

    constructor() {
        this.reservationService = new ReservationService();
    }

    public async createReservation(req: Request, res: Response): Promise<void> {
        try {
            const reservationData: Reservation = req.body;
            const validationErrors = validateReservation(reservationData);

            if (validationErrors.length > 0) {
                res.status(400).json({ errors: validationErrors });
                return;
            }

            const newReservation = await this.reservationService.create(reservationData);
            res.status(201).json(newReservation);
        } catch (error) {
            res.status(500).json({ message: 'Error creating reservation', error });
        }
    }

    public async getReservations(req: Request, res: Response): Promise<void> {
        try {
            const reservations = await this.reservationService.getAll();
            res.status(200).json(reservations);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching reservations', error });
        }
    }

    public async updateReservation(req: Request, res: Response): Promise<void> {
        try {
            const reservationId = req.params.id;
            const reservationData: Reservation = req.body;

            const updatedReservation = await this.reservationService.update(reservationId, reservationData);
            if (!updatedReservation) {
                res.status(404).json({ message: 'Reservation not found' });
                return;
            }

            res.status(200).json(updatedReservation);
        } catch (error) {
            res.status(500).json({ message: 'Error updating reservation', error });
        }
    }

    public async deleteReservation(req: Request, res: Response): Promise<void> {
        try {
            const reservationId = req.params.id;
            const deleted = await this.reservationService.delete(reservationId);

            if (!deleted) {
                res.status(404).json({ message: 'Reservation not found' });
                return;
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting reservation', error });
        }
    }
}