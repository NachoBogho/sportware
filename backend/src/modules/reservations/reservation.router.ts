import { Router } from 'express';
import { ReservationController } from './reservation.controller';
import { createReservationValidation, updateReservationValidation } from './reservation.validations';

const router = Router();
const controller = new ReservationController();

// Route to create a new reservation
router.post('/', createReservationValidation, controller.createReservation.bind(controller));

// Route to get all reservations
router.get('/', controller.getReservations.bind(controller));

// Route to update a reservation by ID
router.put('/:id', updateReservationValidation, controller.updateReservation.bind(controller));

// Route to delete a reservation by ID
router.delete('/:id', controller.deleteReservation.bind(controller));

export default router;