import { body, validationResult } from 'express-validator';

export const validateReservation = [
  body('courtId').isMongoId().withMessage('Court ID must be a valid MongoDB ObjectId'),
  body('customerId').isMongoId().withMessage('Customer ID must be a valid MongoDB ObjectId'),
  body('startTime').isISO8601().withMessage('Start time must be a valid ISO 8601 date'),
  body('endTime').isISO8601().withMessage('End time must be a valid ISO 8601 date'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateCourt = [
  body('name').notEmpty().withMessage('Court name is required'),
  body('type').notEmpty().withMessage('Court type is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateSchedule = [
  body('courtId').isMongoId().withMessage('Court ID must be a valid MongoDB ObjectId'),
  body('date').isISO8601().withMessage('Date must be a valid ISO 8601 date'),
  body('availableSlots').isArray().withMessage('Available slots must be an array'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];