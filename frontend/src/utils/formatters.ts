// This file contains utility functions for formatting data in the SportWare application.

export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
};

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

export const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const formatReservationDetails = (reservation: {
    date: Date;
    time: string;
    court: string;
    clientName: string;
}): string => {
    return `Reservation for ${reservation.clientName} on ${formatDate(reservation.date)} at ${reservation.time} for court ${reservation.court}`;
};