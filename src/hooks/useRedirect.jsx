import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RedirectCali = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/Cali');
  }, [navigate]);

  return null;
};