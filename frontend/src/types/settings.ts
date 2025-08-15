export interface Settings {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  logoUrl: string;
  courtTypes: CourtType[];
  pricing: Pricing[];
}

export interface CourtType {
  id: string;
  name: string;
  description: string;
}

export interface Pricing {
  courtTypeId: string;
  pricePerHour: number;
  peakHours: string[];
  offPeakHours: string[];
}