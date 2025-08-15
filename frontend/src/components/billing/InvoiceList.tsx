import React, { useEffect, useState } from 'react';
import { Invoice } from '../../types/billing';
import { fetchInvoices } from '../../services/billingApi';
import Table from '../ui/Table';

const InvoiceList: React.FC = () => {
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

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="text-white">
            <h2 className="text-2xl mb-4">Invoice List</h2>
            <Table data={invoices} />
        </div>
    );
};

export default InvoiceList;