export interface Schedule {
    id: string;
    courtId: string;
    startTime: Date;
    endTime: Date;
    sportType: 'football' | 'tennis' | 'paddle' | string; // Extendable for other sports
    customerId: string;
    status: 'booked' | 'available' | 'maintenance';
}

export interface CreateScheduleInput {
    courtId: string;
    startTime: Date;
    endTime: Date;
    sportType: 'football' | 'tennis' | 'paddle' | string;
    customerId: string;
}

export interface UpdateScheduleInput {
    id: string;
    courtId?: string;
    startTime?: Date;
    endTime?: Date;
    sportType?: 'football' | 'tennis' | 'paddle' | string;
    customerId?: string;
}

export interface ScheduleReport {
    totalBookings: number;
    totalRevenue: number;
    bookingsBySport: Record<string, number>;
}