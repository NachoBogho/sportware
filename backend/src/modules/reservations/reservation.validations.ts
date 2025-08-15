import { body } from 'express-validator';

export const createReservationValidation = [
  body('courtId')
    .notEmpty()
    .withMessage('Court ID is required.')
    .isMongoId()
    .withMessage('Court ID must be a valid MongoDB ObjectId.'),
  body('customerId')
    .notEmpty()
    .withMessage('Customer ID is required.')
    .isMongoId()
    .withMessage('Customer ID must be a valid MongoDB ObjectId.'),
  body('startTime')
    .notEmpty()
    .withMessage('Start time is required.')
    .isISO8601()
    .withMessage('Start time must be a valid date.'),
  body('endTime')
    .notEmpty()
    .withMessage('End time is required.')
    .isISO8601()
    .withMessage('End time must be a valid date.')
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.startTime)) {
        throw new Error('End time must be after start time.');
      }
      return true;
    }),
];

export const updateReservationValidation = [
  body('reservationId')
    .notEmpty()
    .withMessage('Reservation ID is required.')
    .isMongoId()
    .withMessage('Reservation ID must be a valid MongoDB ObjectId.'),
  body('courtId')
    .optional()
    .isMongoId()
    .withMessage('Court ID must be a valid MongoDB ObjectId.'),
  body('customerId')
    .optional()
    .isMongoId()
    .withMessage('Customer ID must be a valid MongoDB ObjectId.'),
  body('startTime')
    .optional()
    .isISO8601()
    .withMessage('Start time must be a valid date.'),
  body('endTime')
    .optional()
    .isISO8601()
    .withMessage('End time must be a valid date.')
    .custom((value, { req }) => {
      if (req.body.startTime && new Date(value) <= new Date(req.body.startTime)) {
        throw new Error('End time must be after start time.');
      }
      return true;
    }),
];

export const deleteReservationValidation = [
  body('reservationId')
    .notEmpty()
    .withMessage('Reservation ID is required.')
    .isMongoId()
    .withMessage('Reservation ID must be a valid MongoDB ObjectId.'),
];