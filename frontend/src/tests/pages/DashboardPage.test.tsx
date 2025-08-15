import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from '../DashboardPage';

describe('DashboardPage', () => {
  beforeEach(() => {
    render(<DashboardPage />);
  });

  test('renders dashboard title', () => {
    const titleElement = screen.getByText(/Dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders recent reservations section', () => {
    const recentReservationsElement = screen.getByText(/Recent Reservations/i);
    expect(recentReservationsElement).toBeInTheDocument();
  });

  test('renders statistics section', () => {
    const statsElement = screen.getByText(/Statistics/i);
    expect(statsElement).toBeInTheDocument();
  });

  test('renders revenue summary section', () => {
    const revenueElement = screen.getByText(/Revenue Summary/i);
    expect(revenueElement).toBeInTheDocument();
  });

  test('renders quick access buttons', () => {
    const quickAccessElement = screen.getByText(/Quick Access/i);
    expect(quickAccessElement).toBeInTheDocument();
  });
});