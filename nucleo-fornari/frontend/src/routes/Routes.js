import ProfessorPage from '../views/professor/professorView';
import SecretaryPage from '../views/secretary/SecretaryView';
import ResponsaveisPage from '../views/parents/parentsView';
import HelpRequestTable from '../views/secretary/help-request-table/HelpRequestTable';
import Publication from '../views/secretary/publication/PublicationComponent.jsx'

export const routes  = [
  {
    path: '/chamado',
    name: 'Chamados',
    component: HelpRequestTable,
  },
  {
    path: '/publicacao',
    name: 'Publicações',
    component: Publication,
  },
  {
    path: '/calendario',
    name: 'Calendario',
    component: HelpRequestTable
  },
]

export default routes;