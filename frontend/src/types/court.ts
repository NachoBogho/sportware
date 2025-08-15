export interface Court {
    id: string;
    name: string;
    type: 'football' | 'tennis' | 'paddle' | string; // Extendable for other sports
    location: string;
    pricePerHour: number;
    availableHours: Array<{ start: string; end: string }>; // Time slots available for booking
    maintenanceDates?: Date[]; // Optional maintenance dates
}