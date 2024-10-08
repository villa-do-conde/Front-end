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
import Agenda from './components/Dashboards/Agenda';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
  {/* <SideMenu></SideMenu> position: fixed; 

*/ }

  <Header/>
  <Agenda nomeAluno="Jules"/>
  <Avisos titulo="titulo teste"
   conteudo="assunto agenda"
   autor="Pedro Artur"
   dataCriacao= "29/03/2005"/>
  
  </React.StrictMode>
);