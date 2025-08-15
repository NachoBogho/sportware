import React from 'react';

const ReportsFilters: React.FC = () => {
    const [dateRange, setDateRange] = React.useState<[Date, Date]>([new Date(), new Date()]);
    const [sportType, setSportType] = React.useState<string>('all');
    const [client, setClient] = React.useState<string>('');

    const handleDateChange = (startDate: Date, endDate: Date) => {
        setDateRange([startDate, endDate]);
    };

    const handleSportTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSportType(event.target.value);
    };

    const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClient(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Logic to fetch reports based on filters
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
                <label className="block text-white">Date Range:</label>
                <input type="date" value={dateRange[0].toISOString().split('T')[0]} onChange={(e) => handleDateChange(new Date(e.target.value), dateRange[1])} className="bg-gray-800 text-white" />
                <input type="date" value={dateRange[1].toISOString().split('T')[0]} onChange={(e) => handleDateChange(dateRange[0], new Date(e.target.value))} className="bg-gray-800 text-white" />
            </div>
            <div>
                <label className="block text-white">Sport Type:</label>
                <select value={sportType} onChange={handleSportTypeChange} className="bg-gray-800 text-white">
                    <option value="all">All</option>
                    <option value="football">Football</option>
                    <option value="tennis">Tennis</option>
                    <option value="paddle">Paddle</option>
                </select>
            </div>
            <div>
                <label className="block text-white">Client:</label>
                <input type="text" value={client} onChange={handleClientChange} className="bg-gray-800 text-white" />
            </div>
            <button type="submit" className="bg-green-600 text-white py-2 rounded">Generate Report</button>
        </form>
    );
};

export default ReportsFilters;