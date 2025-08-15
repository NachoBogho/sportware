import { format, parseISO } from 'date-fns';

// Function to format date to a readable string
export const formatDate = (dateString: string): string => {
    const date = parseISO(dateString);
    return format(date, 'dd/MM/yyyy');
};

// Function to get the current date in a specific format
export const getCurrentDate = (): string => {
    return format(new Date(), 'dd/MM/yyyy');
};

// Function to check if a date is in the past
export const isDateInPast = (dateString: string): boolean => {
    const date = parseISO(dateString);
    return date < new Date();
};

// Function to add days to a date
export const addDays = (dateString: string, days: number): string => {
    const date = parseISO(dateString);
    const newDate = new Date(date.setDate(date.getDate() + days));
    return format(newDate, 'yyyy-MM-dd');
};