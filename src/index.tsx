import Project from 'features/Projects/Project';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './sass/style.scss';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
