// filepath: c:\Users\hp\Desktop\themed-react-components-using-abstract-factory-pattern\src\main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this import is present
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
