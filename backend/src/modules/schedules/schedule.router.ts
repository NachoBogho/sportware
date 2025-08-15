import { Router } from 'express';
import { ScheduleController } from './schedule.controller';
import { validateRequest } from '../../middlewares/validate-request';
import { scheduleValidationSchema } from './schedule.validations';

const router = Router();
const scheduleController = new ScheduleController();

// Route to create a new schedule
router.post('/', validateRequest(scheduleValidationSchema), scheduleController.createSchedule);

// Route to get all schedules
router.get('/', scheduleController.getAllSchedules);

// Route to get a specific schedule by ID
router.get('/:id', scheduleController.getScheduleById);

// Route to update a schedule by ID
router.put('/:id', validateRequest(scheduleValidationSchema), scheduleController.updateSchedule);

// Route to delete a schedule by ID
router.delete('/:id', scheduleController.deleteSchedule);

export default router;