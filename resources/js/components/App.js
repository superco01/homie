import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                </div>
            </Router>
            
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
