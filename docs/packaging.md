# Packaging Instructions for SportWare

## Overview

This document outlines the steps required to package the SportWare application for distribution using Electron. The goal is to create an installable executable (.exe) file that can be easily distributed to clients.

## Prerequisites

Before packaging the application, ensure that you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Electron and Electron Builder

## Steps to Package the Application

1. **Navigate to the Project Directory**

   Open your terminal and navigate to the root directory of the SportWare project:

   ```
   cd /path/to/SportWare
   ```

2. **Install Dependencies**

   Ensure all dependencies are installed for both the frontend and backend:

   ```
   npm install
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Build the Frontend**

   Build the frontend application using the following command:

   ```
   cd ../frontend
   npm run build
   ```

   This will generate the production-ready files in the `dist` directory.

4. **Build the Backend**

   Ensure the backend is built and ready to serve the API. You may need to run any necessary build scripts defined in the backend `package.json`.

5. **Configure Electron Builder**

   Ensure that the `electron-builder.yml` file in the `config` directory is properly configured with the necessary settings, including application name, version, and build targets.

6. **Run the Packaging Script**

   From the root directory, run the packaging script to create the executable:

   ```
   npm run build-all
   ```

   This script should be defined in the `scripts` directory and should handle the packaging process using Electron Builder.

7. **Locate the Executable**

   After the packaging process is complete, the executable file will be located in the `dist` directory (or the directory specified in your `electron-builder.yml` configuration).

8. **Testing the Executable**

   Before distributing the executable, test it on a clean machine to ensure that it installs and runs correctly without any dependencies.

9. **Distributing the Application**

   Once tested, you can distribute the `.exe` file to your clients. Ensure to provide them with the necessary license key for activation.

## Conclusion

Following these steps will allow you to successfully package the SportWare application for distribution. Ensure to keep the documentation updated with any changes to the packaging process.