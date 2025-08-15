import { Schedule } from './schedule.model';
import { ScheduleType } from './schedule.types';
import { BadRequestError } from '../../middlewares/error-handler';

class ScheduleService {
    async createSchedule(scheduleData: ScheduleType): Promise<Schedule> {
        const schedule = new Schedule(scheduleData);
        return await schedule.save();
    }

    async getSchedules(): Promise<Schedule[]> {
        return await Schedule.find();
    }

    async updateSchedule(id: string, scheduleData: ScheduleType): Promise<Schedule | null> {
        const schedule = await Schedule.findByIdAndUpdate(id, scheduleData, { new: true });
        if (!schedule) {
            throw new BadRequestError('Schedule not found');
        }
        return schedule;
    }

    async deleteSchedule(id: string): Promise<Schedule | null> {
        return await Schedule.findByIdAndDelete(id);
    }

    async findScheduleById(id: string): Promise<Schedule | null> {
        return await Schedule.findById(id);
    }
}

export const scheduleService = new ScheduleService();