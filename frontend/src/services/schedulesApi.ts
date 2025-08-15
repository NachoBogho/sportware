import apiClient from './apiClient';
import { Schedule } from '../types/schedule';

const SCHEDULES_API_URL = '/api/schedules';

export const fetchSchedules = async (): Promise<Schedule[]> => {
    const response = await apiClient.get(SCHEDULES_API_URL);
    return response.data;
};

export const createSchedule = async (schedule: Schedule): Promise<Schedule> => {
    const response = await apiClient.post(SCHEDULES_API_URL, schedule);
    return response.data;
};

export const updateSchedule = async (id: string, schedule: Schedule): Promise<Schedule> => {
    const response = await apiClient.put(`${SCHEDULES_API_URL}/${id}`, schedule);
    return response.data;
};

export const deleteSchedule = async (id: string): Promise<void> => {
    await apiClient.delete(`${SCHEDULES_API_URL}/${id}`);
};