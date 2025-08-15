import { useState, useEffect } from 'react';
import { fetchInvoices, createInvoice, updateInvoice, deleteInvoice } from '../services/billingApi';
import { Invoice } from '../types/billing';

const useBilling = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadInvoices = async () => {
            try {
                const data = await fetchInvoices();
                setInvoices(data);
            } catch (err) {
                setError('Failed to load invoices');
            } finally {
                setLoading(false);
            }
        };

        loadInvoices();
    }, []);

    const addInvoice = async (invoice: Invoice) => {
        try {
            const newInvoice = await createInvoice(invoice);
            setInvoices((prev) => [...prev, newInvoice]);
        } catch (err) {
            setError('Failed to create invoice');
        }
    };

    const editInvoice = async (invoice: Invoice) => {
        try {
            const updatedInvoice = await updateInvoice(invoice);
            setInvoices((prev) =>
                prev.map((inv) => (inv.id === updatedInvoice.id ? updatedInvoice : inv))
            );
        } catch (err) {
            setError('Failed to update invoice');
        }
    };

    const removeInvoice = async (id: string) => {
        try {
            await deleteInvoice(id);
            setInvoices((prev) => prev.filter((inv) => inv.id !== id));
        } catch (err) {
            setError('Failed to delete invoice');
        }
    };

    return {
        invoices,
        loading,
        error,
        addInvoice,
        editInvoice,
        removeInvoice,
    };
};

export default useBilling;