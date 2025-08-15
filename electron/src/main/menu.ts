// This file sets up the application menu for the Electron app.

import { app, Menu } from 'electron';

const createMenu = () => {
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'New Reservation',
                    click: () => {
                        // Logic to create a new reservation
                    }
                },
                {
                    label: 'Open',
                    click: () => {
                        // Logic to open a file
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Exit',
                    role: 'quit'
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {
                    label: 'Undo',
                    role: 'undo'
                },
                {
                    label: 'Redo',
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Cut',
                    role: 'cut'
                },
                {
                    label: 'Copy',
                    role: 'copy'
                },
                {
                    label: 'Paste',
                    role: 'paste'
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Documentation',
                    click: () => {
                        // Logic to open documentation
                    }
                },
                {
                    label: 'About',
                    click: () => {
                        // Logic to show about dialog
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
};

export default createMenu;