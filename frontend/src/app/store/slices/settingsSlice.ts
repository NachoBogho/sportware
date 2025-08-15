import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  logo: string;
  courtTypes: Array<{ name: string; price: number }>;
}

const initialState: SettingsState = {
  primaryColor: '#4CAF50', // Dark medium bright green
  backgroundColor: '#000000', // Black
  textColor: '#FFFFFF', // White
  logo: '',
  courtTypes: [],
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPrimaryColor(state, action: PayloadAction<string>) {
      state.primaryColor = action.payload;
    },
    setBackgroundColor(state, action: PayloadAction<string>) {
      state.backgroundColor = action.payload;
    },
    setTextColor(state, action: PayloadAction<string>) {
      state.textColor = action.payload;
    },
    setLogo(state, action: PayloadAction<string>) {
      state.logo = action.payload;
    },
    setCourtTypes(state, action: PayloadAction<Array<{ name: string; price: number }>>) {
      state.courtTypes = action.payload;
    },
  },
});

export const { setPrimaryColor, setBackgroundColor, setTextColor, setLogo, setCourtTypes } = settingsSlice.actions;

export default settingsSlice.reducer;