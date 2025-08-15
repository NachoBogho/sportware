import { Schema, model } from 'mongoose';

const courtSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['football', 'tennis', 'paddle', 'other'],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availability: {
    type: [String], // Array of available time slots
    required: true,
  },
  price: {
    type: Number,
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

courtSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Court = model('Court', courtSchema);

export default Court;