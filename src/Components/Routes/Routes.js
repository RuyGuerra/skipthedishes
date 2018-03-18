import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import NotFound from '../../Components/UI/NotFound/NotFound';
import routes from '../../routes';

const Routes = props => (
    <Switch>
        {routes.map(
            ({exact, path, component}, index) => (
                <Route
                    key={index}
                    exact={exact}
                    path={path}
                    component={component} />
            ))
        }
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
    </Switch>
)

export default Routes