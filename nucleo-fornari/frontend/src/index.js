import React from 'react';
import ReactDOM from 'react-dom/client';
// import ProfessorPage from './views/professor/professorView';
import './index.css'
// import Formulario from './components/Login/Formulario';
// import ParentsPage from './views/parents/parentsView';
// import SecretaryPage from './views/secretary/secretaryView'
import SideMenu from './components/SideMenu/sideMenuView';
import ParentsPage from './views/parents/parentsView';
import ParentsPageReuniao from './views/parents/parentsView';
import ParentsPageAgenda from './views/parents/parentsView';
import Header from './components/Dashboards/Header';
import Avisos from './components/Dashboards/Avisos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <Header/>
 
  <Avisos titulo="titulo teste"
  conteudo="Teste testes testes testes"
  autor="Felipe Villa do Conde"
  dataCriacao="7 de Setembro de 2001"/>
  
  </React.StrictMode>
);