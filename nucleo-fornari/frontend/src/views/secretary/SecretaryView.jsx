import React from 'react';
import api from '../../api.js'
import SideMenu from '../../components/SideMenu/sideMenuView';
import HelpRequestTable from './help-request-table/HelpRequestTable';

function SecretaryPage() {
  // const sideMenuItens = [
  //   {
  //     icon: '',
  //     name: 'Chamados',
  //     route: '/chamado'
  //   },
  //   {
  //     icon: '',
  //     name: 'Publicações',
  //     route: '/publicacao'
  //   },
  //   {
  //     icon: '',
  //     name: 'Calendário',
  //     route: '/calendario'
  //   },
  //   {
  //     icon: '',
  //     name: 'Gerenciar',
  //     route: '/gerencia'
  //   },
    
    // function getChamadoData() {
    //   api
    //     .get()
    //     .then((response) => {
    //       const { data } = response;
    //       console.log(data);
    //     })
    //     .catch(() => {
    //       console.log("Deu erro, tente novamente!");
    //     });
    // }
          
// ]

  return (
    <div className='flex content-center items-center'>
      <HelpRequestTable />
    </div>
  );
}

export default SecretaryPage;