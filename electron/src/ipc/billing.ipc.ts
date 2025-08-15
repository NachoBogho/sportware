// billing.ipc.ts
import { ipcMain } from 'electron';
import { BillingService } from '../../backend/src/modules/billing/billing.service';

ipcMain.handle('billing:getInvoices', async (event) => {
    try {
        const invoices = await BillingService.getInvoices();
        return invoices;
    } catch (error) {
        console.error('Error fetching invoices:', error);
        throw new Error('Failed to fetch invoices');
    }
});

ipcMain.handle('billing:createInvoice', async (event, invoiceData) => {
    try {
        const newInvoice = await BillingService.createInvoice(invoiceData);
        return newInvoice;
    } catch (error) {
        console.error('Error creating invoice:', error);
        throw new Error('Failed to create invoice');
    }
});

ipcMain.handle('billing:recordPayment', async (event, paymentData) => {
    try {
        const paymentRecord = await BillingService.recordPayment(paymentData);
        return paymentRecord;
    } catch (error) {
        console.error('Error recording payment:', error);
        throw new Error('Failed to record payment');
    }
});