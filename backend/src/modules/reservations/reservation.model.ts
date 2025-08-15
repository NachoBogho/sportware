import { Schema, model } from 'mongoose';

const reservationSchema = new Schema({
  courtId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Court',
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
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

reservationSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Reservation = model('Reservation', reservationSchema);

export default Reservation;