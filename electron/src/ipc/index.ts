// This file sets up the IPC communication for the Electron application.

import { ipcMain } from 'electron';
import { handleReservationsIPC } from './reservations.ipc';
import { handleReportsIPC } from './reports.ipc';
import { handleBillingIPC } from './billing.ipc';
import { handleLicenseIPC } from './license.ipc';

export const setupIPC = () => {
    handleReservationsIPC(ipcMain);
    handleReportsIPC(ipcMain);
    handleBillingIPC(ipcMain);
    handleLicenseIPC(ipcMain);
};