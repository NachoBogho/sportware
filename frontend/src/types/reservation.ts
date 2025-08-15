export interface Reservation {
    id: string;
    courtId: string;
    userId: string;
    startTime: Date;
    endTime: Date;
    sportType: 'football' | 'tennis' | 'paddle' | 'other';
    status: 'confirmed' | 'cancelled' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}