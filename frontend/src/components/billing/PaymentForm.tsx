import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPayment } from '../../services/billingApi';
import { setBilling } from '../../app/slices/billingSlice';

const PaymentForm: React.FC = () => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState<number>(0);
    const [paymentMethod, setPaymentMethod] = useState<string>('credit_card');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const paymentData = await createPayment({ amount, paymentMethod });
            dispatch(setBilling(paymentData));
            // Reset form or show success message
        } catch (err) {
            setError('Error processing payment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded">
            <h2 className="text-white text-lg mb-4">Payment Form</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block text-white mb-2">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Payment Method</label>
                <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                >
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">Bank Transfer</option>
                </select>
            </div>
            <button
                type="submit"
                className={`w-full p-2 rounded ${loading ? 'bg-gray-600' : 'bg-green-600'} text-white`}
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Submit Payment'}
            </button>
        </form>
    );
};

export default PaymentForm;