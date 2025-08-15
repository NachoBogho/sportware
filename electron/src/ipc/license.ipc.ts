// This file contains IPC handlers for license management in the SportWare application.

import { ipcMain } from 'electron';
import { LicenseService } from '../../backend/src/modules/license/license.service';

ipcMain.handle('activate-license', async (event, licenseKey: string) => {
    try {
        const isValid = await LicenseService.validateLicense(licenseKey);
        return { success: isValid };
    } catch (error) {
        console.error('Error validating license:', error);
        throw new Error('License validation failed');
    }
});

ipcMain.handle('get-license-status', async () => {
    try {
        const status = await LicenseService.getLicenseStatus();
        return { status };
    } catch (error) {
        console.error('Error fetching license status:', error);
        throw new Error('Failed to fetch license status');
    }
});