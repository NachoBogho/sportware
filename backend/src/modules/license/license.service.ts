import { LicenseModel } from './license.model';
import { License } from './license.types';

class LicenseService {
    async activateLicense(key: string): Promise<License | null> {
        try {
            const license = await LicenseModel.findOne({ key });
            if (!license) {
                throw new Error('Invalid license key');
            }
            return license;
        } catch (error) {
            console.error('Error activating license:', error);
            throw new Error('License activation failed');
        }
    }

    async validateLicense(key: string): Promise<boolean> {
        try {
            const license = await LicenseModel.findOne({ key });
            return !!license;
        } catch (error) {
            console.error('Error validating license:', error);
            return false;
        }
    }

    async createLicense(key: string, userId: string): Promise<License> {
        try {
            const newLicense = new LicenseModel({ key, userId });
            await newLicense.save();
            return newLicense;
        } catch (error) {
            console.error('Error creating license:', error);
            throw new Error('License creation failed');
        }
    }
}

export const licenseService = new LicenseService();