import { create } from 'zustand';

interface AppState {
  reservations: any[];
  courts: any[];
  schedules: any[];
  reports: any[];
  billing: any[];
  settings: any[];
  addReservation: (reservation: any) => void;
  removeReservation: (id: string) => void;
  updateCourt: (court: any) => void;
  // Add more state and actions as needed
}

const useStore = create<AppState>((set) => ({
  reservations: [],
  courts: [],
  schedules: [],
  reports: [],
  billing: [],
  settings: [],
  addReservation: (reservation) => set((state) => ({
    reservations: [...state.reservations, reservation],
  })),
  removeReservation: (id) => set((state) => ({
    reservations: state.reservations.filter(reservation => reservation.id !== id),
  })),
  updateCourt: (court) => set((state) => ({
    courts: state.courts.map(c => c.id === court.id ? court : c),
  })),
  // Add more actions as needed
}));

export default useStore;