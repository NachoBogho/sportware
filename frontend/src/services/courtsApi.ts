import axios from 'axios';
import { Court } from '../types/court';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/courts';

export const getCourts = async (): Promise<Court[]> => {
    try {
        const response = await axios.get<Court[]>(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching courts: ' + error);
    }
};

export const createCourt = async (court: Court): Promise<Court> => {
    try {
        const response = await axios.post<Court>(API_URL, court);
        return response.data;
    } catch (error) {
        throw new Error('Error creating court: ' + error);
    }
};

export const updateCourt = async (courtId: string, court: Court): Promise<Court> => {
    try {
        const response = await axios.put<Court>(`${API_URL}/${courtId}`, court);
        return response.data;
    } catch (error) {
        throw new Error('Error updating court: ' + error);
    }
};

export const deleteCourt = async (courtId: string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${courtId}`);
    } catch (error) {
        throw new Error('Error deleting court: ' + error);
    }
};