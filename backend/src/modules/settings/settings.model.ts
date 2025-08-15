import mongoose, { Document, Schema } from 'mongoose';

export interface ISettings extends Document {
    clubName: string;
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    courtTypes: Array<{ type: string; price: number; }>;
    operatingHours: Array<{ day: string; open: string; close: string; }>;
}

const SettingsSchema: Schema = new Schema({
    clubName: { type: String, required: true },
    logoUrl: { type: String, required: true },
    primaryColor: { type: String, default: '#4CAF50' }, // Dark green
    secondaryColor: { type: String, default: '#FFFFFF' }, // White
    courtTypes: [{
        type: { type: String, required: true },
        price: { type: Number, required: true }
    }],
    operatingHours: [{
        day: { type: String, required: true },
        open: { type: String, required: true },
        close: { type: String, required: true }
    }]
}, { timestamps: true });

export const Settings = mongoose.model<ISettings>('Settings', SettingsSchema);