import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSettings } from '../../store/slices/settingsSlice';
import { RootState } from '../../store';

const SystemSettingsForm: React.FC = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state: RootState) => state.settings);
    const [formData, setFormData] = useState({
        clubName: settings.clubName || '',
        primaryColor: settings.primaryColor || '#4CAF50',
        logo: settings.logo || '',
    });

    useEffect(() => {
        setFormData({
            clubName: settings.clubName || '',
            primaryColor: settings.primaryColor || '#4CAF50',
            logo: settings.logo || '',
        });
    }, [settings]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateSettings(formData));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-black text-white">
            <h2 className="text-lg font-bold mb-4">System Settings</h2>
            <div className="mb-4">
                <label className="block mb-2" htmlFor="clubName">Club Name</label>
                <input
                    type="text"
                    name="clubName"
                    value={formData.clubName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2" htmlFor="primaryColor">Primary Color</label>
                <input
                    type="color"
                    name="primaryColor"
                    value={formData.primaryColor}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-600"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2" htmlFor="logo">Logo URL</label>
                <input
                    type="text"
                    name="logo"
                    value={formData.logo}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white"
                />
            </div>
            <button type="submit" className="bg-green-600 p-2 rounded">Save Settings</button>
        </form>
    );
};

export default SystemSettingsForm;