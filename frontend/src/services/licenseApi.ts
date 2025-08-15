import axios from 'axios';

const API_URL = 'http://localhost:5000/api/license';

export const activateLicense = async (licenseKey: string) => {
    try {
        const response = await axios.post(`${API_URL}/activate`, { licenseKey });
        return response.data;
    } catch (error) {
        throw new Error('Error activating license: ' + error.message);
    }
};

export const validateLicense = async () => {
    try {
        const response = await axios.get(`${API_URL}/validate`);
        return response.data;
    } catch (error) {
        throw new Error('Error validating license: ' + error.message);
    }
};