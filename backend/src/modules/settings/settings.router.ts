import { Router } from 'express';
import { getSettings, updateSettings } from './settings.controller';

const router = Router();

// Route to get system settings
router.get('/', getSettings);

// Route to update system settings
router.put('/', updateSettings);

export default router;