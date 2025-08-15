import apiClient from './apiClient';
import { Settings } from '../types/settings';

const SETTINGS_ENDPOINT = '/settings';

export const getSettings = async (): Promise<Settings> => {
    const response = await apiClient.get(SETTINGS_ENDPOINT);
    return response.data;
};

export const updateSettings = async (settings: Settings): Promise<Settings> => {
    const response = await apiClient.put(SETTINGS_ENDPOINT, settings);
    return response.data;
};