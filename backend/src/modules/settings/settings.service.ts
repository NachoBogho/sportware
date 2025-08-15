import { SettingsModel } from './settings.model';
import { ISettings } from './settings.types';

export class SettingsService {
    private settings: ISettings;

    constructor() {
        this.settings = this.loadSettings();
    }

    private loadSettings(): ISettings {
        // Logic to load settings from the database or a file
        return {
            primaryColor: '#4CAF50', // Dark medium bright green
            backgroundColor: '#000000', // Black
            textColor: '#FFFFFF', // White
            // Add other default settings as needed
        };
    }

    public getSettings(): ISettings {
        return this.settings;
    }

    public updateSettings(newSettings: ISettings): void {
        this.settings = { ...this.settings, ...newSettings };
        this.saveSettings();
    }

    private saveSettings(): void {
        // Logic to save settings to the database or a file
    }
}