import React from 'react';
import SystemSettingsForm from '../components/settings/SystemSettingsForm';
import PricingConfig from '../components/settings/PricingConfig';

const SettingsPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-black text-white">
            <h1 className="text-2xl font-bold mb-4">Configuración del Sistema</h1>
            <SystemSettingsForm />
            <PricingConfig />
        </div>
    );
};

export default SettingsPage;