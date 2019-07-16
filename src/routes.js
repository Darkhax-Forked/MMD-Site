import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Missing from './components/missing.js';
import Footer from './components/footer.js';

export const Routes = () => {

    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route exact path="/about" component={About}/>
                <Route component={Missing}/>
            </Switch>
            <Footer/>
        </div>
    );
}