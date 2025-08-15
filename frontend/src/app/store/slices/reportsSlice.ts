import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Report } from '../../types/report';

interface ReportsState {
  reports: Report[];
  loading: boolean;
  error: string | null;
}

const initialState: ReportsState = {
  reports: [],
  loading: false,
  error: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    fetchReportsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchReportsSuccess(state, action: PayloadAction<Report[]>) {
      state.loading = false;
      state.reports = action.payload;
    },
    fetchReportsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearReports(state) {
      state.reports = [];
      state.error = null;
    },
  },
});

export const {
  fetchReportsStart,
  fetchReportsSuccess,
  fetchReportsFailure,
  clearReports,
} = reportsSlice.actions;

export default reportsSlice.reducer;