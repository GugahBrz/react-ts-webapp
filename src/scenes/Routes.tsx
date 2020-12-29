import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { NavBar, NavBarLink } from '../components/NavBar';

import Home from './Home';
import About from './About';

export default function Routes() {
    const home: NavBarLink = { path: '', label: 'Home' };
    const links: Array<NavBarLink> = [
        { path: 'about', label: 'About' }
    ];

    return (
        <React.Fragment>
            <NavBar home={home} links={links} />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                
                {/* redirect on unhandled path */}
                <Redirect to="/" />
            </Switch>
        </React.Fragment>
    );
}

