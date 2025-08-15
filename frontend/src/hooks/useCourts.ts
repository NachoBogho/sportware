import { useEffect, useState } from 'react';
import { Court } from '../types/court';
import { fetchCourts } from '../services/courtsApi';

const useCourts = () => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourts = async () => {
      try {
        const data = await fetchCourts();
        setCourts(data);
      } catch (err) {
        setError('Error fetching courts');
      } finally {
        setLoading(false);
      }
    };

    loadCourts();
  }, []);

  return { courts, loading, error };
};

export default useCourts;