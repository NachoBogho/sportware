import { Router } from 'express';
import { createInvoice, getInvoices, getInvoiceById, updateInvoice, deleteInvoice } from './billing.controller';
import { validateInvoice } from './billing.validations';

const router = Router();

// Create a new invoice
router.post('/', validateInvoice, createInvoice);

// Get all invoices
router.get('/', getInvoices);

// Get a specific invoice by ID
router.get('/:id', getInvoiceById);

// Update an existing invoice
router.put('/:id', validateInvoice, updateInvoice);

// Delete an invoice
router.delete('/:id', deleteInvoice);

export default router;