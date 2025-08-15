import { ipcMain } from 'electron';
import { ReportsService } from '../../backend/src/modules/reports/reports.service';

ipcMain.handle('getUsageReport', async (event, filters) => {
    try {
        const report = await ReportsService.getUsageReport(filters);
        return report;
    } catch (error) {
        console.error('Error fetching usage report:', error);
        throw new Error('Failed to fetch usage report');
    }
});

ipcMain.handle('getRevenueReport', async (event, filters) => {
    try {
        const report = await ReportsService.getRevenueReport(filters);
        return report;
    } catch (error) {
        console.error('Error fetching revenue report:', error);
        throw new Error('Failed to fetch revenue report');
    }
});