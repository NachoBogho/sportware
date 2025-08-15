import request from 'supertest';
import app from '../app'; // Adjust the path as necessary
import { connectDB, disconnectDB } from '../config/db'; // Adjust the path as necessary

describe('Reports API', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  it('should generate usage report', async () => {
    const response = await request(app)
      .get('/api/reports/usage') // Adjust the endpoint as necessary
      .query({ startDate: '2023-01-01', endDate: '2023-01-31' }); // Example query parameters

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toBeInstanceOf(Array);
  });

  it('should generate revenue report', async () => {
    const response = await request(app)
      .get('/api/reports/revenue') // Adjust the endpoint as necessary
      .query({ startDate: '2023-01-01', endDate: '2023-01-31' }); // Example query parameters

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('totalRevenue');
  });

  it('should return 404 for invalid report type', async () => {
    const response = await request(app)
      .get('/api/reports/invalid') // Invalid endpoint
      .query({ startDate: '2023-01-01', endDate: '2023-01-31' });

    expect(response.status).toBe(404);
  });
});