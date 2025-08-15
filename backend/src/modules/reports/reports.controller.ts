import { Request, Response } from 'express';
import { ReportsService } from './reports.service';

class ReportsController {
    private reportsService: ReportsService;

    constructor() {
        this.reportsService = new ReportsService();
    }

    public async getUsageReport(req: Request, res: Response): Promise<void> {
        try {
            const report = await this.reportsService.generateUsageReport(req.query);
            res.status(200).json(report);
        } catch (error) {
            res.status(500).json({ message: 'Error generating usage report', error });
        }
    }

    public async getRevenueReport(req: Request, res: Response): Promise<void> {
        try {
            const report = await this.reportsService.generateRevenueReport(req.query);
            res.status(200).json(report);
        } catch (error) {
            res.status(500).json({ message: 'Error generating revenue report', error });
        }
    }
}

export const reportsController = new ReportsController();