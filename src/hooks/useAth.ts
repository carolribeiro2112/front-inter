import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('nenhum contexto encontrado')
  }

  return context
}