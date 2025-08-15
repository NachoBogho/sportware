// This file contains validation functions for user input in the SportWare application.

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
};

export const validateReservationDate = (date: string): boolean => {
    const dateObj = new Date(date);
    return dateObj instanceof Date && !isNaN(dateObj.valueOf());
};

export const validateTimeSlot = (startTime: string, endTime: string): boolean => {
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    return start < end;
};

export const validateRequiredField = (value: string): boolean => {
    return value.trim().length > 0;
};