export interface Reservation {
    id: string;
    courtId: string;
    userId: string;
    startTime: Date;
    endTime: Date;
    date: Date;
    sportType: 'football' | 'tennis' | 'paddle' | string; // Extendable for other sports
    status: 'confirmed' | 'cancelled' | 'completed';
}

export interface CreateReservationInput {
    courtId: string;
    userId: string;
    startTime: Date;
    endTime: Date;
    date: Date;
    sportType: 'football' | 'tennis' | 'paddle' | string; // Extendable for other sports
}

export interface UpdateReservationInput {
    id: string;
    courtId?: string;
    userId?: string;
    startTime?: Date;
    endTime?: Date;
    date?: Date;
    sportType?: 'football' | 'tennis' | 'paddle' | string; // Extendable for other sports
}

export interface ReservationStatistics {
    totalReservations: number;
    totalRevenue: number;
    cancellations: number;
    completed: number;
}