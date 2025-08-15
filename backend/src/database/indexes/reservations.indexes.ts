import { Schema } from 'mongoose';

const reservationSchema = new Schema({
  courtId: {
    type: Schema.Types.ObjectId,
    ref: 'Court',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for optimizing queries
reservationSchema.index({ courtId: 1, startTime: 1 });
reservationSchema.index({ userId: 1 });
reservationSchema.index({ startTime: 1, endTime: 1 });

export default reservationSchema;