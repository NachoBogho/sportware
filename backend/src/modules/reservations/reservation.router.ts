import { Router } from 'express';
import { createReservation, getReservations, updateReservation, deleteReservation } from './reservation.controller';
import { validateReservation } from './reservation.validations';

const router = Router();

// Route to create a new reservation
router.post('/', validateReservation, createReservation);

// Route to get all reservations
router.get('/', getReservations);

// Route to update a reservation by ID
router.put('/:id', validateReservation, updateReservation);

// Route to delete a reservation by ID
router.delete('/:id', deleteReservation);

export default router;