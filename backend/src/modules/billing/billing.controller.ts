import { Request, Response } from 'express';
import { BillingService } from './billing.service';
import { Invoice } from './invoice.model';
import { Payment } from './payment.model';

export class BillingController {
    private billingService: BillingService;

    constructor() {
        this.billingService = new BillingService();
    }

    public async createInvoice(req: Request, res: Response): Promise<void> {
        try {
            const invoiceData: Invoice = req.body;
            const newInvoice = await this.billingService.createInvoice(invoiceData);
            res.status(201).json(newInvoice);
        } catch (error) {
            res.status(500).json({ message: 'Error creating invoice', error });
        }
    }

    public async getInvoices(req: Request, res: Response): Promise<void> {
        try {
            const invoices = await this.billingService.getInvoices();
            res.status(200).json(invoices);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching invoices', error });
        }
    }

    public async createPayment(req: Request, res: Response): Promise<void> {
        try {
            const paymentData: Payment = req.body;
            const newPayment = await this.billingService.createPayment(paymentData);
            res.status(201).json(newPayment);
        } catch (error) {
            res.status(500).json({ message: 'Error creating payment', error });
        }
    }

    public async getPayments(req: Request, res: Response): Promise<void> {
        try {
            const payments = await this.billingService.getPayments();
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching payments', error });
        }
    }
}