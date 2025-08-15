import { Report } from '../../types/report';
import { Reservation } from '../../modules/reservations/reservation.model';
import { Billing } from '../../modules/billing/invoice.model';

export class ReportsService {
    async getUsageReport(startDate: Date, endDate: Date): Promise<Report[]> {
        // Fetch reservations within the specified date range
        const reservations = await Reservation.find({
            date: { $gte: startDate, $lte: endDate }
        });

        // Process reservations to create a usage report
        const report: Report[] = this.processReservations(reservations);
        return report;
    }

    async getRevenueReport(startDate: Date, endDate: Date): Promise<number> {
        // Fetch billing records within the specified date range
        const billingRecords = await Billing.find({
            date: { $gte: startDate, $lte: endDate }
        });

        // Calculate total revenue
        const totalRevenue = billingRecords.reduce((total, record) => total + record.amount, 0);
        return totalRevenue;
    }

    private processReservations(reservations: Reservation[]): Report[] {
        // Logic to process reservations and generate report data
        const reportData: Report[] = [];

        // Example processing logic
        reservations.forEach(reservation => {
            const existingReport = reportData.find(r => r.courtId === reservation.courtId);
            if (existingReport) {
                existingReport.count++;
            } else {
                reportData.push({ courtId: reservation.courtId, count: 1 });
            }
        });

        return reportData;
    }
}