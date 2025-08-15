export interface Reservation {
    id: string;
    courtId: string;
    clientId: string;
    startTime: Date;
    endTime: Date;
    sportType: 'football' | 'tennis' | 'paddle' | 'other';
    status: 'confirmed' | 'cancelled' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}