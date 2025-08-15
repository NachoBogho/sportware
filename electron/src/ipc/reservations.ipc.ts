// This file contains IPC handlers for managing reservations in the SportWare application.

import { ipcMain } from 'electron';
import { ReservationService } from '../../backend/src/modules/reservations/reservation.service';
import { Reservation } from '../../backend/src/modules/reservations/reservation.types';

ipcMain.handle('reservations:create', async (event, reservationData: Reservation) => {
    try {
        const reservation = await ReservationService.createReservation(reservationData);
        return reservation;
    } catch (error) {
        throw new Error(`Error creating reservation: ${error.message}`);
    }
});

ipcMain.handle('reservations:update', async (event, reservationId: string, reservationData: Reservation) => {
    try {
        const updatedReservation = await ReservationService.updateReservation(reservationId, reservationData);
        return updatedReservation;
    } catch (error) {
        throw new Error(`Error updating reservation: ${error.message}`);
    }
});

ipcMain.handle('reservations:delete', async (event, reservationId: string) => {
    try {
        await ReservationService.deleteReservation(reservationId);
        return { success: true };
    } catch (error) {
        throw new Error(`Error deleting reservation: ${error.message}`);
    }
});

ipcMain.handle('reservations:getAll', async (event) => {
    try {
        const reservations = await ReservationService.getAllReservations();
        return reservations;
    } catch (error) {
        throw new Error(`Error fetching reservations: ${error.message}`);
    }
});