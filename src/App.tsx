import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './scenes/Routes';

export default function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}
