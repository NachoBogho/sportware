# SportWare

SportWare is a comprehensive management system designed for the efficient handling of sports courts, including football, tennis, paddle, and more. This application provides a user-friendly interface for managing reservations, schedules, billing, and reporting, all while ensuring a modern and responsive design.

## Features

- **Dashboard**: A central hub displaying recent reservations, weekly statistics, and billing summaries.
- **Reservation Management**: Create, modify, and delete reservations with validation for occupied time slots.
- **Schedule Control**: Visual calendar for daily, weekly, and monthly views, with options to block times for maintenance or events.
- **Reporting**: Generate detailed reports on court usage and revenue, with filters for date, sport, and client.
- **Billing**: Manage payments, generate invoices, and maintain a billing history.
- **Configuration**: Customize system settings, including colors, logos, court types, pricing, and available hours.

## Technologies Used

- **Frontend**: React with TypeScript and TailwindCSS for a modern UI.
- **Backend**: Node.js with Express for API management.
- **Database**: MongoDB for local data storage.
- **Desktop Application**: Electron for packaging the application as a desktop executable.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/SportWare.git
   cd SportWare
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and configure your settings.

4. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

5. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

6. To build the Electron application:
   ```
   cd electron
   npm run build
   ```

## Usage

- Launch the application and enter your license key to activate.
- Use the dashboard to navigate through reservations, schedules, reports, and settings.
- Access the documentation in the `docs` folder for detailed usage instructions.

## License

This project is licensed under the MIT License. See the LICENSE.md file for more details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## Acknowledgments

Thank you to all contributors and libraries that made this project possible.
