import React, { useState } from 'react';
import { useLicense } from '../hooks/useLicense';
import { Button, Input } from '../components/ui';

const LicensePage: React.FC = () => {
    const [licenseKey, setLicenseKey] = useState('');
    const { activateLicense, errorMessage } = useLicense();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        activateLicense(licenseKey);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-2xl mb-4">Activate Your License</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-80">
                <Input
                    type="text"
                    placeholder="Enter your license key"
                    value={licenseKey}
                    onChange={(e) => setLicenseKey(e.target.value)}
                    className="mb-4"
                />
                {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Activate
                </Button>
            </form>
        </div>
    );
};

export default LicensePage;