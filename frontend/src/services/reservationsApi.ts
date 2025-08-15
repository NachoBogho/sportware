import axios from 'axios';
import { Reservation } from '../types/reservation';

const API_BASE_URL = 'http://localhost:5000/api/reservations';

export const getReservations = async (): Promise<Reservation[]> => {
    const response = await axios.get<Reservation[]>(API_BASE_URL);
    return response.data;
};

export const createReservation = async (reservation: Reservation): Promise<Reservation> => {
    const response = await axios.post<Reservation>(API_BASE_URL, reservation);
    return response.data;
};

export const updateReservation = async (id: string, reservation: Reservation): Promise<Reservation> => {
    const response = await axios.put<Reservation>(`${API_BASE_URL}/${id}`, reservation);
    return response.data;
};

export const deleteReservation = async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};