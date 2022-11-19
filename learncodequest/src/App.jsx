import React from 'react';
import { AppRouter } from './routes';
import './index.css'
import { AuthProvider } from './context/auth';





export const App = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  );
}

