import axios from 'axios';
import { Billing } from '../types/billing';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/billing';

export const getInvoices = async () => {
    try {
        const response = await axios.get(`${API_URL}/invoices`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching invoices: ' + error.message);
    }
};

export const createInvoice = async (billingData: Billing) => {
    try {
        const response = await axios.post(`${API_URL}/invoices`, billingData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating invoice: ' + error.message);
    }
};

export const updateInvoice = async (invoiceId: string, billingData: Billing) => {
    try {
        const response = await axios.put(`${API_URL}/invoices/${invoiceId}`, billingData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating invoice: ' + error.message);
    }
};

export const deleteInvoice = async (invoiceId: string) => {
    try {
        await axios.delete(`${API_URL}/invoices/${invoiceId}`);
    } catch (error) {
        throw new Error('Error deleting invoice: ' + error.message);
    }
};