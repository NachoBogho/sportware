import { Request, Response } from 'express';
import LicenseService from './license.service';

class LicenseController {
    async activateLicense(req: Request, res: Response): Promise<void> {
        try {
            const { key } = req.body;
            const result = await LicenseService.activateLicense(key);
            res.status(200).json({ message: 'License activated successfully', result });
        } catch (error) {
            res.status(400).json({ message: 'License activation failed', error: error.message });
        }
    }

    async validateLicense(req: Request, res: Response): Promise<void> {
        try {
            const { key } = req.body;
            const isValid = await LicenseService.validateLicense(key);
            res.status(200).json({ isValid });
        } catch (error) {
            res.status(400).json({ message: 'License validation failed', error: error.message });
        }
    }
}

export default new LicenseController();