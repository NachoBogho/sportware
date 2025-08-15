import { useEffect, useState } from 'react';

interface Settings {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  // Add more settings as needed
}

const defaultSettings: Settings = {
  primaryColor: '#4CAF50', // Dark medium bright green
  backgroundColor: '#000000', // Black
  textColor: '#FFFFFF', // White
};

const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  useEffect(() => {
    const savedSettings = localStorage.getItem('sportware-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('sportware-settings', JSON.stringify(updatedSettings));
  };

  return { settings, updateSettings };
};

export default useSettings;