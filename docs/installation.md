# SportWare Installation Instructions

## Prerequisites

Before installing SportWare, ensure you have the following software installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager, comes with Node.js)
- **MongoDB** (local installation for database management)
- **Git** (optional, for version control)

## Installation Steps

1. **Clone the Repository**

   Open your terminal and run the following command to clone the SportWare repository:

   ```
   git clone https://github.com/yourusername/SportWare.git
   ```

   Replace `yourusername` with your GitHub username.

2. **Navigate to the Project Directory**

   Change to the project directory:

   ```
   cd SportWare
   ```

3. **Install Backend Dependencies**

   Navigate to the backend directory and install the required dependencies:

   ```
   cd backend
   npm install
   ```

4. **Set Up Environment Variables**

   Copy the example environment file and configure your environment variables:

   ```
   cp .env.example .env
   ```

   Edit the `.env` file to set your MongoDB connection string and other necessary configurations.

5. **Run the Backend Server**

   Start the backend server:

   ```
   npm run start
   ```

   The backend server should now be running on `http://localhost:5000`.

6. **Install Frontend Dependencies**

   Open a new terminal window, navigate to the frontend directory, and install the required dependencies:

   ```
   cd frontend
   npm install
   ```

7. **Run the Frontend Application**

   Start the frontend application:

   ```
   npm run dev
   ```

   The frontend application should now be running on `http://localhost:3000`.

8. **Build the Electron Application**

   To package the application for desktop use, navigate to the Electron directory and build the application:

   ```
   cd electron
   npm install
   npm run build
   ```

9. **Run the Electron Application**

   After building, you can run the Electron application:

   ```
   npm start
   ```

## License Activation

Upon first launch, you will be prompted to enter a license key. Ensure you have a valid license key to access the full features of SportWare.

## Conclusion

You have successfully installed SportWare. For further usage instructions, please refer to the `usage.md` file in the `docs` directory.