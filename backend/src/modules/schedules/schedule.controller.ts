import { Request, Response } from 'express';
import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.model';

export class ScheduleController {
    private scheduleService: ScheduleService;

    constructor() {
        this.scheduleService = new ScheduleService();
    }

    public async createSchedule(req: Request, res: Response): Promise<void> {
        try {
            const scheduleData: Schedule = req.body;
            const newSchedule = await this.scheduleService.createSchedule(scheduleData);
            res.status(201).json(newSchedule);
        } catch (error) {
            res.status(500).json({ message: 'Error creating schedule', error });
        }
    }

    public async getSchedules(req: Request, res: Response): Promise<void> {
        try {
            const schedules = await this.scheduleService.getSchedules();
            res.status(200).json(schedules);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching schedules', error });
        }
    }

    public async updateSchedule(req: Request, res: Response): Promise<void> {
        try {
            const scheduleId = req.params.id;
            const scheduleData: Schedule = req.body;
            const updatedSchedule = await this.scheduleService.updateSchedule(scheduleId, scheduleData);
            res.status(200).json(updatedSchedule);
        } catch (error) {
            res.status(500).json({ message: 'Error updating schedule', error });
        }
    }

    public async deleteSchedule(req: Request, res: Response): Promise<void> {
        try {
            const scheduleId = req.params.id;
            await this.scheduleService.deleteSchedule(scheduleId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting schedule', error });
        }
    }
}