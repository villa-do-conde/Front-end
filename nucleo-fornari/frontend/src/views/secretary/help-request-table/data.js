import React from 'react';
import HelpRequestTable from './HelpRequestTable';

const ExamplePage = () => {
  const sampleData = [
    {
      prioridade: 'alta',
      sala: 'Sala 101',
      professor: 'Prof. João',
      categoria: 'TI',
      descricao: 'Computador não liga',
    },
    {
      prioridade: 'baixa',
      sala: 'Sala 202',
      professor: 'Prof. Maria',
      categoria: 'Manutenção',
      descricao: 'Ar condicionado com defeito',
    },
  ];

  return <HelpRequestTable data={sampleData} />;
};

export default ExamplePage;
