import React, { useEffect, useState } from 'react';
import { fetchInvoices, fetchPayments } from '../services/billingApi';
import { Invoice, Payment } from '../types/billing';
import InvoiceList from '../components/billing/InvoiceList';
import PaymentForm from '../components/billing/PaymentForm';

const BillingPage: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [payments, setPayments] = useState<Payment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBillingData = async () => {
            try {
                const fetchedInvoices = await fetchInvoices();
                const fetchedPayments = await fetchPayments();
                setInvoices(fetchedInvoices);
                setPayments(fetchedPayments);
            } catch (err) {
                setError('Error fetching billing data');
            } finally {
                setLoading(false);
            }
        };

        loadBillingData();
    }, []);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl text-white">Billing Management</h1>
            <PaymentForm />
            <InvoiceList invoices={invoices} />
        </div>
    );
};

export default BillingPage;