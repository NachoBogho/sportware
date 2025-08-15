export interface License {
    key: string;
    isValid: boolean;
    expirationDate: Date;
    issuedTo: string;
}

export interface LicenseValidationResponse {
    isValid: boolean;
    message: string;
}