import React from 'react';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sobre" component={About}/>
            </Switch>
        </Router>
    );
}

export default Routes;