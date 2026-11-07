import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import '@/i18n';

import { App } from './App';

declare module '@mui/material/styles' {
  interface Palette {
    unknown: {
      main: string;
      light: string;
    };
  }
}

// INFO: declaration is in public/env.js
declare global {
  interface Window {
    BASE_API_URL: string;
  }
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
