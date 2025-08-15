import React, { useState, useEffect } from 'react';
import { fetchPricingConfig, updatePricingConfig } from '../../services/settingsApi';
import { PricingConfigType } from '../../types/settings';

const PricingConfig: React.FC = () => {
    const [pricingConfig, setPricingConfig] = useState<PricingConfigType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPricingConfig = async () => {
            try {
                const config = await fetchPricingConfig();
                setPricingConfig(config);
            } catch (err) {
                setError('Error loading pricing configuration');
            } finally {
                setLoading(false);
            }
        };

        loadPricingConfig();
    }, []);

    const handleSave = async () => {
        if (pricingConfig) {
            try {
                await updatePricingConfig(pricingConfig);
                alert('Pricing configuration updated successfully');
            } catch (err) {
                setError('Error updating pricing configuration');
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Pricing Configuration</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                {/* Render form fields for pricingConfig here */}
                <button type="submit" className="mt-4 bg-green-600 text-white p-2 rounded">Save</button>
            </form>
        </div>
    );
};

export default PricingConfig;