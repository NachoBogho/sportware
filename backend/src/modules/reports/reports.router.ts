import { Router } from 'express';
import { getReports, getUsageReport, getRevenueReport } from './reports.controller';

const router = Router();

// Route to get all reports
router.get('/', getReports);

// Route to get usage report
router.get('/usage', getUsageReport);

// Route to get revenue report
router.get('/revenue', getRevenueReport);

export default router;