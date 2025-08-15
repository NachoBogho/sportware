import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../store/slices/reservationsSlice';
import { Input, Select, Button, Modal } from '../ui';

const ReservationForm = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [court, setCourt] = useState('');
    const [clientName, setClientName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!date || !time || !court || !clientName) {
            setError('All fields are required');
            return;
        }
        dispatch(createReservation({ date, time, court, clientName }));
        setShowModal(true);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Select Date"
                className="w-full"
            />
            <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Select Time"
                className="w-full"
            />
            <Select
                value={court}
                onChange={(e) => setCourt(e.target.value)}
                className="w-full"
            >
                <option value="">Select Court</option>
                <option value="football">Football</option>
                <option value="tennis">Tennis</option>
                <option value="paddle">Paddle</option>
            </Select>
            <Input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Client Name"
                className="w-full"
            />
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full">Create Reservation</Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <h2>Reservation Created</h2>
                <p>Your reservation has been successfully created!</p>
                <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal>
        </form>
    );
};

export default ReservationForm;