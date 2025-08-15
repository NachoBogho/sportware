// This file contains type definitions for the SportWare application.

export interface Reservation {
    id: string;
    courtId: string;
    clientId: string;
    startTime: Date;
    endTime: Date;
    status: 'confirmed' | 'canceled' | 'pending';
}

export interface Court {
    id: string;
    name: string;
    type: 'football' | 'tennis' | 'paddle';
    price: number;
    availableTimes: string[];
}

export interface Schedule {
    id: string;
    courtId: string;
    date: Date;
    availableSlots: string[];
}

export interface Report {
    id: string;
    type: 'usage' | 'revenue';
    data: any; // Define specific structure based on report type
}

export interface Billing {
    id: string;
    reservationId: string;
    amount: number;
    date: Date;
    status: 'paid' | 'unpaid';
}

export interface Settings {
    clubName: string;
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
}

export interface License {
    key: string;
    validUntil: Date;
    isActive: boolean;
}