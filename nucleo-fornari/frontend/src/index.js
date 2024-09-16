import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfessorPage from './views/professor/professorView';
import './index.css'
// import ParentsPage from './views/parents/parentsView';
// import SecretaryPage from './views/secretary/secretaryView'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfessorPage />
  </React.StrictMode>
);