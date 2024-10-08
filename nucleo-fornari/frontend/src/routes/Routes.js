import ProfessorPage from '../views/professor/professorView';
import SecretaryPage from '../views/secretary/SecretaryView';
import ResponsaveisPage from '../views/parents/parentsView';
import HelpRequestTable from '../views/secretary/help-request-table/HelpRequestTable';
import Publication from '../views/secretary/publication/PublicationComponent.jsx'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


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
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/professor/" component={ProfessorPage} />
        <PrivateRoute path="/secretaria" component={SecretariaPage} />
        <PrivateRoute path="/responsaveis" component={ResponsaveisPage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default routes;