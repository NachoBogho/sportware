export interface Invoice {
    id: string;
    clientId: string;
    amount: number;
    date: Date;
    status: 'paid' | 'pending' | 'canceled';
}

export interface Payment {
    id: string;
    invoiceId: string;
    amount: number;
    date: Date;
    method: 'credit_card' | 'cash' | 'bank_transfer';
}

export interface BillingSummary {
    totalInvoices: number;
    totalPaid: number;
    totalPending: number;
    totalCanceled: number;
    totalRevenue: number;
}