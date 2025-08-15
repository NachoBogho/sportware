import { Request, Response } from 'express';
import CourtService from './court.service';
import { Court } from './court.model';

class CourtController {
    async getAllCourts(req: Request, res: Response) {
        try {
            const courts = await CourtService.getAllCourts();
            res.status(200).json(courts);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving courts', error });
        }
    }

    async getCourtById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const court = await CourtService.getCourtById(id);
            if (!court) {
                return res.status(404).json({ message: 'Court not found' });
            }
            res.status(200).json(court);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving court', error });
        }
    }

    async createCourt(req: Request, res: Response) {
        const courtData: Court = req.body;
        try {
            const newCourt = await CourtService.createCourt(courtData);
            res.status(201).json(newCourt);
        } catch (error) {
            res.status(500).json({ message: 'Error creating court', error });
        }
    }

    async updateCourt(req: Request, res: Response) {
        const { id } = req.params;
        const courtData: Court = req.body;
        try {
            const updatedCourt = await CourtService.updateCourt(id, courtData);
            if (!updatedCourt) {
                return res.status(404).json({ message: 'Court not found' });
            }
            res.status(200).json(updatedCourt);
        } catch (error) {
            res.status(500).json({ message: 'Error updating court', error });
        }
    }

    async deleteCourt(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedCourt = await CourtService.deleteCourt(id);
            if (!deletedCourt) {
                return res.status(404).json({ message: 'Court not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting court', error });
        }
    }
}

export default new CourtController();