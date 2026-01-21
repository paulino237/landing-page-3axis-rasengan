import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Page from '@/app/_routes/index.page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
