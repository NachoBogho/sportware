import { Request, Response } from 'express';
import { SettingsService } from './settings.service';
import { Settings } from './settings.model';

export class SettingsController {
    private settingsService: SettingsService;

    constructor() {
        this.settingsService = new SettingsService();
    }

    public async getSettings(req: Request, res: Response): Promise<void> {
        try {
            const settings: Settings = await this.settingsService.getSettings();
            res.status(200).json(settings);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving settings', error });
        }
    }

    public async updateSettings(req: Request, res: Response): Promise<void> {
        try {
            const updatedSettings: Settings = await this.settingsService.updateSettings(req.body);
            res.status(200).json(updatedSettings);
        } catch (error) {
            res.status(500).json({ message: 'Error updating settings', error });
        }
    }
}