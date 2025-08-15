import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { createWindow } from './app-window';
import { setupIpc } from './ipc';
import { setupMenu } from './menu';
import { checkForUpdates } from './auto-updater';

const isDev = process.env.NODE_ENV === 'development';

function initializeApp() {
    const mainWindow = createWindow();

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => {
        app.quit();
    });

    setupIpc();
    setupMenu();
    checkForUpdates();
}

app.on('ready', initializeApp);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        initializeApp();
    }
});