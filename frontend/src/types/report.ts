export interface Report {
    id: string;
    title: string;
    date: Date;
    type: 'usage' | 'revenue';
    data: ReportData;
}

export interface ReportData {
    total: number;
    details: Array<ReportDetail>;
}

export interface ReportDetail {
    label: string;
    value: number;
}