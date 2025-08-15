export interface Schedule {
    id: string;
    courtId: string;
    startTime: Date;
    endTime: Date;
    sportType: 'football' | 'tennis' | 'paddle' | string;
    isBlocked: boolean;
    maintenanceReason?: string;
}

export interface ScheduleBlock {
    id: string;
    scheduleId: string;
    startTime: Date;
    endTime: Date;
    reason: string;
}