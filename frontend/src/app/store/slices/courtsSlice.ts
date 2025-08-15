import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Court } from '../../types/court';

interface CourtsState {
  courts: Court[];
  loading: boolean;
  error: string | null;
}

const initialState: CourtsState = {
  courts: [],
  loading: false,
  error: null,
};

const courtsSlice = createSlice({
  name: 'courts',
  initialState,
  reducers: {
    fetchCourtsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCourtsSuccess(state, action: PayloadAction<Court[]>) {
      state.loading = false;
      state.courts = action.payload;
    },
    fetchCourtsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addCourt(state, action: PayloadAction<Court>) {
      state.courts.push(action.payload);
    },
    updateCourt(state, action: PayloadAction<Court>) {
      const index = state.courts.findIndex(court => court.id === action.payload.id);
      if (index !== -1) {
        state.courts[index] = action.payload;
      }
    },
    deleteCourt(state, action: PayloadAction<string>) {
      state.courts = state.courts.filter(court => court.id !== action.payload);
    },
  },
});

export const {
  fetchCourtsStart,
  fetchCourtsSuccess,
  fetchCourtsFailure,
  addCourt,
  updateCourt,
  deleteCourt,
} = courtsSlice.actions;

export default courtsSlice.reducer;