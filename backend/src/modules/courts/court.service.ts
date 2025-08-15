import { Court } from './court.model';
import { CourtInput, CourtUpdateInput } from './court.types';
import { NotFoundError } from '../../middlewares/error-handler';
import { db } from '../../config/db';

export class CourtService {
    async createCourt(courtInput: CourtInput): Promise<Court> {
        const court = new Court(courtInput);
        await court.save();
        return court;
    }

    async getCourtById(courtId: string): Promise<Court> {
        const court = await Court.findById(courtId);
        if (!court) {
            throw new NotFoundError('Court not found');
        }
        return court;
    }

    async updateCourt(courtId: string, courtUpdateInput: CourtUpdateInput): Promise<Court> {
        const court = await this.getCourtById(courtId);
        Object.assign(court, courtUpdateInput);
        await court.save();
        return court;
    }

    async deleteCourt(courtId: string): Promise<void> {
        const court = await this.getCourtById(courtId);
        await court.remove();
    }

    async getAllCourts(): Promise<Court[]> {
        return Court.find();
    }
}