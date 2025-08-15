export interface Court {
  id: string;
  name: string;
  type: 'football' | 'tennis' | 'paddle' | string; // Extendable for other sports
  location: string;
  pricePerHour: number;
  availableHours: string[]; // Array of available hours in HH:mm format
  isActive: boolean;
}

export interface CourtCreateInput {
  name: string;
  type: 'football' | 'tennis' | 'paddle' | string;
  location: string;
  pricePerHour: number;
  availableHours: string[];
}

export interface CourtUpdateInput {
  id: string;
  name?: string;
  type?: 'football' | 'tennis' | 'paddle' | string;
  location?: string;
  pricePerHour?: number;
  availableHours?: string[];
}