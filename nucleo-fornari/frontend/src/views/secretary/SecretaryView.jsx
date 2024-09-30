import React from 'react';
import SideMenu from '../../components/SideMenu/sideMenuView';
import HelpRequestTable from './help-request-table/HelpRequestTable';

function SecretaryPage() {
  const sideMenuItens = [
    {
      icon: 'a',
      name: 'Chamados',
      route: '/chamado'
    },
    {
      icon: 'a',
      name: 'Publicações',
      route: '/publicacao'
    },
    {
      icon: 'a',
      name: 'Calendário',
      route: '/calendario'
    },
    {
      icon: 'a',
      name: 'Gerenciar',
      route: '/gerencia'
    },
          
]
  return (
    <div className='flex content-center items-center'>
      <SideMenu menuItens={sideMenuItens}></SideMenu>
      <HelpRequestTable>

      </HelpRequestTable>
    </div>
  );
}

export default SecretaryPage;