import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import routes from './router.config';
const Routers = () => (
    <Switch>
        {
            routes.map((route, i) => (
                <Route
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    
                />
            ))
        }
    </Switch>
);

export default Routers;