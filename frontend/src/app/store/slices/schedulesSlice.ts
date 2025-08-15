import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Schedule } from '../../types/schedule';

interface SchedulesState {
  schedules: Schedule[];
  loading: boolean;
  error: string | null;
}

const initialState: SchedulesState = {
  schedules: [],
  loading: false,
  error: null,
};

const schedulesSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    fetchSchedulesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSchedulesSuccess(state, action: PayloadAction<Schedule[]>) {
      state.loading = false;
      state.schedules = action.payload;
    },
    fetchSchedulesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addSchedule(state, action: PayloadAction<Schedule>) {
      state.schedules.push(action.payload);
    },
    updateSchedule(state, action: PayloadAction<Schedule>) {
      const index = state.schedules.findIndex(schedule => schedule.id === action.payload.id);
      if (index !== -1) {
        state.schedules[index] = action.payload;
      }
    },
    deleteSchedule(state, action: PayloadAction<string>) {
      state.schedules = state.schedules.filter(schedule => schedule.id !== action.payload);
    },
  },
});

export const {
  fetchSchedulesStart,
  fetchSchedulesSuccess,
  fetchSchedulesFailure,
  addSchedule,
  updateSchedule,
  deleteSchedule,
} = schedulesSlice.actions;

export default schedulesSlice.reducer;