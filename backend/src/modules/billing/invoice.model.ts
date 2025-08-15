import mongoose, { Document, Schema } from 'mongoose';

export interface IInvoice extends Document {
    invoiceNumber: string;
    clientName: string;
    dateIssued: Date;
    amount: number;
    status: 'paid' | 'unpaid' | 'pending';
}

const InvoiceSchema: Schema = new Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    dateIssued: {
        type: Date,
        default: Date.now,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['paid', 'unpaid', 'pending'],
        default: 'unpaid',
    },
});

const InvoiceModel = mongoose.model<IInvoice>('Invoice', InvoiceSchema);

export default InvoiceModel;