import React, { useState } from 'react';

const MaintenanceBlockForm: React.FC = () => {
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [court, setCourt] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle form submission, e.g., API call to save maintenance block
    };

    return (
        <form onSubmit={handleSubmit} className="bg-black p-4 rounded-lg">
            <h2 className="text-white text-lg mb-4">Schedule Maintenance Block</h2>
            <div className="mb-4">
                <label className="block text-white mb-2">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Start Time</label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">End Time</label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Court</label>
                <select
                    value={court}
                    onChange={(e) => setCourt(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                >
                    <option value="">Select a court</option>
                    <option value="football">Football</option>
                    <option value="tennis">Tennis</option>
                    <option value="paddle">Paddle</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Reason</label>
                <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    rows={3}
                    required
                />
            </div>
            <button type="submit" className="bg-green-600 text-white p-2 rounded">
                Schedule Maintenance
            </button>
        </form>
    );
};

export default MaintenanceBlockForm;