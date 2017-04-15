import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from "react-router"
import { App, SignIn, SignUp, Home } from './component'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SignIn}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/Home" component={Home}/>
        </Route>

    </Router>
) 