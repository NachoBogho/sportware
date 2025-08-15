import request from 'supertest';
import app from '../app'; // Import the main app instance
import { connectDB, disconnectDB } from '../config/db'; // Import database connection functions
import { Reservation } from '../modules/reservations/reservation.model'; // Import the Reservation model

beforeAll(async () => {
  await connectDB(); // Connect to the database before tests
});

afterAll(async () => {
  await disconnectDB(); // Disconnect from the database after tests
});

describe('Reservations API', () => {
  let reservationId: string;

  it('should create a new reservation', async () => {
    const response = await request(app)
      .post('/api/reservations')
      .send({
        courtId: 'court123',
        clientId: 'client123',
        startTime: new Date().toISOString(),
        endTime: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    reservationId = response.body._id; // Store the reservation ID for later tests
  });

  it('should retrieve the created reservation', async () => {
    const response = await request(app).get(`/api/reservations/${reservationId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', reservationId);
  });

  it('should update the reservation', async () => {
    const response = await request(app)
      .put(`/api/reservations/${reservationId}`)
      .send({
        endTime: new Date(new Date().getTime() + 120 * 60 * 1000).toISOString(),
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('endTime');
  });

  it('should delete the reservation', async () => {
    const response = await request(app).delete(`/api/reservations/${reservationId}`);

    expect(response.status).toBe(204);
  });

  it('should return 404 for non-existing reservation', async () => {
    const response = await request(app).get(`/api/reservations/${reservationId}`);

    expect(response.status).toBe(404);
  });
});