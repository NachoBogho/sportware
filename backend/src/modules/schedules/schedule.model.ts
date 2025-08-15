import mongoose, { Document, Schema } from 'mongoose';

export interface ISchedule extends Document {
    courtId: string;
    startTime: Date;
    endTime: Date;
    sportType: string;
    isBlocked: boolean;
    maintenanceReason?: string;
}

const ScheduleSchema: Schema = new Schema({
    courtId: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    sportType: { type: String, required: true },
    isBlocked: { type: Boolean, default: false },
    maintenanceReason: { type: String, default: null },
}, {
    timestamps: true,
});

const ScheduleModel = mongoose.model<ISchedule>('Schedule', ScheduleSchema);

export default ScheduleModel;