import { Router } from 'express';
import { LicenseController } from './license.controller';

const router = Router();

// Route to activate a license
router.post('/activate', LicenseController.activateLicense);

// Route to validate a license
router.get('/validate', LicenseController.validateLicense);

// Route to get license details
router.get('/details', LicenseController.getLicenseDetails);

export default router;