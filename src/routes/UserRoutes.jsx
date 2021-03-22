import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { routes, defaultRedirect } from '../routes/routes';

const getRoute = ({ path, component }) => {
  return <Route key={path} exact path={path} component={component} />;
};

const UserRoutes = () => {
  return (
    <Switch>
      {routes.map(getRoute)}
      <Redirect to={defaultRedirect} />
    </Switch>
  );
};

export default UserRoutes;
