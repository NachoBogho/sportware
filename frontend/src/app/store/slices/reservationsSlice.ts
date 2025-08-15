import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reservation } from '../../types/reservation';

interface ReservationsState {
  reservations: Reservation[];
  loading: boolean;
  error: string | null;
}

const initialState: ReservationsState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    fetchReservationsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchReservationsSuccess(state, action: PayloadAction<Reservation[]>) {
      state.loading = false;
      state.reservations = action.payload;
    },
    fetchReservationsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addReservation(state, action: PayloadAction<Reservation>) {
      state.reservations.push(action.payload);
    },
    updateReservation(state, action: PayloadAction<Reservation>) {
      const index = state.reservations.findIndex(reservation => reservation.id === action.payload.id);
      if (index !== -1) {
        state.reservations[index] = action.payload;
      }
    },
    deleteReservation(state, action: PayloadAction<string>) {
      state.reservations = state.reservations.filter(reservation => reservation.id !== action.payload);
    },
  },
});

export const {
  fetchReservationsStart,
  fetchReservationsSuccess,
  fetchReservationsFailure,
  addReservation,
  updateReservation,
  deleteReservation,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;