import axios from 'axios';
import { Report } from '../types/report';

const API_URL = 'http://localhost:5000/api/reports';

export const fetchUsageReport = async (filters: any): Promise<Report[]> => {
    try {
        const response = await axios.get(`${API_URL}/usage`, { params: filters });
        return response.data;
    } catch (error) {
        console.error('Error fetching usage report:', error);
        throw error;
    }
};

export const fetchRevenueReport = async (filters: any): Promise<Report[]> => {
    try {
        const response = await axios.get(`${API_URL}/revenue`, { params: filters });
        return response.data;
    } catch (error) {
        console.error('Error fetching revenue report:', error);
        throw error;
    }
};