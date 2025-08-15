import mongoose, { Document, Schema } from 'mongoose';

export interface IPayment extends Document {
    amount: number;
    date: Date;
    method: string;
    invoiceId: string;
    status: 'pending' | 'completed' | 'failed';
}

const PaymentSchema: Schema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    method: {
        type: String,
        required: true,
    },
    invoiceId: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending',
    },
});

const PaymentModel = mongoose.model<IPayment>('Payment', PaymentSchema);

export default PaymentModel;