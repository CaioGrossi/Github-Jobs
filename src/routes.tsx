import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import JobDetail from './pages/JobDetail';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/:id" component={JobDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
