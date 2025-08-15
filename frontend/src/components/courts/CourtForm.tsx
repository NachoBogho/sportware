import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCourt } from '../../app/slices/courtsSlice';
import { Court } from '../../types/court';
import Input from '../ui/Input';
import Button from '../ui/Button';

const CourtForm: React.FC = () => {
    const dispatch = useDispatch();
    const [courtData, setCourtData] = useState<Court>({
        name: '',
        type: '',
        price: 0,
        available: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCourtData({ ...courtData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createCourt(courtData));
        setCourtData({ name: '', type: '', price: 0, available: true });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                label="Court Name"
                name="name"
                value={courtData.name}
                onChange={handleChange}
                required
            />
            <Input
                label="Court Type"
                name="type"
                value={courtData.type}
                onChange={handleChange}
                required
            />
            <Input
                label="Price"
                name="price"
                type="number"
                value={courtData.price}
                onChange={handleChange}
                required
            />
            <div>
                <label className="block text-white">Available</label>
                <select
                    name="available"
                    value={courtData.available ? 'true' : 'false'}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-800 text-white"
                >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <Button type="submit" className="w-full">
                Create Court
            </Button>
        </form>
    );
};

export default CourtForm;