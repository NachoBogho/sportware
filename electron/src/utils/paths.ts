// This file contains utility functions for handling file paths in the Electron application.

import path from 'path';
import { app } from 'electron';

const isDev = process.env.NODE_ENV === 'development';

export const getAppPath = () => {
    return isDev ? path.join(__dirname, '..', '..') : app.getAppPath();
};

export const getAssetsPath = () => {
    return path.join(getAppPath(), 'assets');
};

export const getLogPath = () => {
    return path.join(app.getPath('userData'), 'logs');
};

export const getDatabasePath = () => {
    return path.join(app.getPath('userData'), 'database');
};