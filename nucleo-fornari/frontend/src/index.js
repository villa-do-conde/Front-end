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
import LoginPage from './routes/loginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    
    <main className='flex'>

    <aside >

    <SideMenu/>

    </aside>

    <section className='flex flex-col w-full'>

    <Header/>
    <Avisos/>

    </section>
    
    </main>
   
  
  
  </React.StrictMode>
);