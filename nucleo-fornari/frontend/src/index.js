import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfessorPage from './views/professor/professorView';
import './index.css'
// import Formulario from './components/Login/Formulario';
import SecretaryPage from './views/secretary/SecretaryView'
import SideMenu from './components/SideMenu/sideMenuView';
import ParentsPage from './views/parents/parentsView';
import ParentsPageReuniao from './views/parents/parentsView';
import ParentsPageAgenda from './views/parents/parentsView';
import Header from './components/Dashboards/Header';
import Avisos from './components/Dashboards/Avisos';
import Agenda from './components/Dashboards/Agenda';
import LoginPage from './routes/loginPage';
import Titulo from './components/Dashboards/Titulo';



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
    <main className='flex'>
      <aside >
      <SideMenu menuItens={sideMenuItens[cargo]} />

      </aside>
      <section className='flex flex-col w-full'>
      {pages[cargo]}

      </section>
    </main>      
    
  );
}

