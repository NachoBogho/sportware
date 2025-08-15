import React, { useState } from 'react';
import { useLicense } from '../../hooks/useLicense';
import { Button, Input, Modal } from '../ui';

const LicenseActivation: React.FC = () => {
    const [licenseKey, setLicenseKey] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const { activateLicense } = useLicense();

    const handleActivation = async () => {
        try {
            await activateLicense(licenseKey);
            setSuccess(true);
            setError('');
        } catch (err) {
            setError('Invalid license key. Please try again.');
            setSuccess(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-2xl mb-4">Activate Your License</h1>
            <Input
                type="text"
                placeholder="Enter your license key"
                value={licenseKey}
                onChange={(e) => setLicenseKey(e.target.value)}
                className="mb-4"
            />
            <Button onClick={handleActivation} className="bg-green-600 text-white">
                Activate
            </Button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">License activated successfully!</p>}
        </div>
    );
};

export default LicenseActivation;