import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfessorPage from './views/professor/professorView';
import './index.css'
// import Formulario from './components/Login/Formulario';
import SecretaryPage from './views/secretary/SecretaryView'
import SideMenu from './components/SideMenu/sideMenuView';
import ParentsPage from './views/parents/parentsView';



const root = ReactDOM.createRoot(document.getElementById('root'));

const sideMenuItens = {
  SECRETARIA: [
    {
      icon: '',
      name: 'Chamados',
      route: '/chamado'
    },
    { 
      icon: '',
      name: 'Publicações',
      route: '/publicacao' 
    },
    { 
      icon: '',
      name: 'Calendário',
      route: '/calendario'
    },
    {
      icon: '',
      name: 'Gerenciar',
      route: '/gerencia'
    },
  ],
  PROFESSOR: [
    {
      icon: '',
      name: 'Calendario',
      route: '/calendario'
    },
    { 
      icon: '',
      name: 'Publicações',
      route: '/publicacao'
    },
    { 
      icon: '',
      name: 'Chamados',
      route: '/chamado'
    },
    { 
      icon: '',
      name: 'Relatorio',
      route: '/relatorio'
    },
  ],
  RESPONSAVEL: [
    { 
      icon: '',
      name: 'Publicações',
      route: '/publicacao'
    },
    { 
      icon: '',
      name: 'Reuniões',
      route: '/reuniao'
    },
    { 
      icon: '',
      name: 'Agenda',
      route: '/agenda'
    },
  ]
};

const pages = {
  SECRETARIA: <SecretaryPage />,
  PROFESSOR: <ProfessorPage />,
  RESPONSAVEL: <ParentsPage />
};

const cargo = sessionStorage.getItem("cargo");

if (cargo && sideMenuItens[cargo] && pages[cargo]) {
  root.render(
    <React.StrictMode>
      <SideMenu menuItens={sideMenuItens[cargo]} />
      {pages[cargo]}
    </React.StrictMode>
  );
}

