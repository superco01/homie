import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            homestays: []
        }
    }

    componentDidMount() {
        fetch('/api/homestay')
            .then(response => {
                return response.json();
            })
            .then(homestays => {
                this.setState({ homestays });
            })
        fetch()
            .then(response => {
                return response.json();
            })
    }

    render() {
        
        return (
            <Router>
                <div>
                    <Header/>
                </div>
            </Router>
            
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
