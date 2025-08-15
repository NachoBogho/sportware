import { autoUpdater } from 'electron';
import { app } from 'electron';
import log from 'electron-log';

const server = 'https://your-update-server.com'; // Replace with your update server URL
const feed = `${server}/update/${process.platform}/${app.getVersion()}`;

autoUpdater.setFeedURL({ url: feed });

autoUpdater.on('checking-for-update', () => {
  log.info('Checking for updates...');
});

autoUpdater.on('update-available', () => {
  log.info('Update available. Downloading...');
});

autoUpdater.on('update-not-available', () => {
  log.info('No updates available.');
});

autoUpdater.on('error', (error) => {
  log.error('Error in auto-updater:', error);
});

autoUpdater.on('download-progress', (progressObj) => {
  const { percent } = progressObj;
  log.info(`Download progress: ${percent}%`);
});

autoUpdater.on('update-downloaded', () => {
  log.info('Update downloaded. Will install now...');
  autoUpdater.quitAndInstall();
});

export const initAutoUpdater = () => {
  autoUpdater.checkForUpdates();
};