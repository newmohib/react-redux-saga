import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home/home';
import Counter from './components/Counters/counter';
import Nav from './components/Header/Nav';








const Routes = () => (
    <div>
        <BrowserRouter>
        <Nav/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/app" component={App} />
                <Route exact path="/counter" component={Counter} />
                {/* <Route path="/features" component={FeaturePage} />
                <Route path="/home" component={Home} />
                <Route path="" component={NotFoundPage} /> */}
            </Switch>
        </BrowserRouter>
    </div>
  );
  
  export default Routes;