import { Invoice } from './invoice.model';
import { Payment } from './payment.model';

export class BillingService {
    async createInvoice(invoiceData: Partial<Invoice>): Promise<Invoice> {
        const invoice = new Invoice(invoiceData);
        return await invoice.save();
    }

    async getInvoices(): Promise<Invoice[]> {
        return await Invoice.find();
    }

    async getInvoiceById(invoiceId: string): Promise<Invoice | null> {
        return await Invoice.findById(invoiceId);
    }

    async updateInvoice(invoiceId: string, updateData: Partial<Invoice>): Promise<Invoice | null> {
        return await Invoice.findByIdAndUpdate(invoiceId, updateData, { new: true });
    }

    async deleteInvoice(invoiceId: string): Promise<Invoice | null> {
        return await Invoice.findByIdAndDelete(invoiceId);
    }

    async createPayment(paymentData: Partial<Payment>): Promise<Payment> {
        const payment = new Payment(paymentData);
        return await payment.save();
    }

    async getPayments(): Promise<Payment[]> {
        return await Payment.find();
    }

    async getPaymentById(paymentId: string): Promise<Payment | null> {
        return await Payment.findById(paymentId);
    }

    async updatePayment(paymentId: string, updateData: Partial<Payment>): Promise<Payment | null> {
        return await Payment.findByIdAndUpdate(paymentId, updateData, { new: true });
    }

    async deletePayment(paymentId: string): Promise<Payment | null> {
        return await Payment.findByIdAndDelete(paymentId);
    }
}