import { Router } from 'express';
import { createCourt, getCourts, updateCourt, deleteCourt } from './court.controller';
import { validateRequest } from '../../middlewares/validate-request';
import { courtSchema } from './court.validations';

const router = Router();

// Route to create a new court
router.post('/', validateRequest(courtSchema), createCourt);

// Route to get all courts
router.get('/', getCourts);

// Route to update a court by ID
router.put('/:id', validateRequest(courtSchema), updateCourt);

// Route to delete a court by ID
router.delete('/:id', deleteCourt);

export default router;