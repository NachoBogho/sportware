import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BillingState, Invoice } from '../../types/billing';

const initialState: BillingState = {
  invoices: [],
  loading: false,
  error: null,
};

const billingSlice = createSlice({
  name: 'billing',
  initialState,
  reducers: {
    fetchInvoicesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchInvoicesSuccess(state, action: PayloadAction<Invoice[]>) {
      state.loading = false;
      state.invoices = action.payload;
    },
    fetchInvoicesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addInvoice(state, action: PayloadAction<Invoice>) {
      state.invoices.push(action.payload);
    },
    removeInvoice(state, action: PayloadAction<string>) {
      state.invoices = state.invoices.filter(invoice => invoice.id !== action.payload);
    },
  },
});

export const {
  fetchInvoicesStart,
  fetchInvoicesSuccess,
  fetchInvoicesFailure,
  addInvoice,
  removeInvoice,
} = billingSlice.actions;

export default billingSlice.reducer;