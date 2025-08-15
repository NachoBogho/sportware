import { BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { createMenu } from './menu';
import { setupAutoUpdater } from './auto-updater';

let mainWindow: BrowserWindow | null;

export const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, '../preload/preload.ts'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        },
        backgroundColor: '#000000',
    });

    mainWindow.loadURL('http://localhost:3000'); // Adjust this URL based on your frontend setup

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    createMenu();
    setupAutoUpdater();
};

export const getMainWindow = () => {
    return mainWindow;
};

ipcMain.on('close-app', () => {
    if (mainWindow) {
        mainWindow.close();
    }
});