import { useState, useEffect } from 'react';
import { validateLicense } from '../services/licenseApi';

const useLicense = () => {
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkLicense = async () => {
            try {
                const valid = await validateLicense();
                setIsValid(valid);
            } catch (err) {
                setError('Error validating license');
            }
        };

        checkLicense();
    }, []);

    return { isValid, error };
};

export default useLicense;