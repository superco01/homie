import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            homestays: [],
            errors: [],
            id_user: 1,
        }
    }

    componentDidMount() {
        axios.get('/api/homestay')
            .then(response => {
                return response;
            })
            .then(homestays => {
                this.setState({ homestays });
            })
        fetch('/api/room')
            .then(response => {
                return response.json();
            })
        const { history } = this.props
        console.log(history);
        console.log(this.props);
        console.log(this.state);
        
        const homestay = {
            id_user: this.state.id_user,
            name: 'test 1',
            location: 'loc 1',
            address: 'address 1',
            facilities: 'fac 1',
            number_of_rooms: 6,
        }
        axios.post('api/homestay', homestay)
        .then(res => {
                console.log(res);
                console.log(history);
                console.log('test');
                history.push('/')
            }
        ).catch(
            error => {
                this.setState({
                    errors: error.response
                })
            }
        )
        const room = {
            id_homestay: 1,
            title: 'test room 1',
            description: 'test desc room 1',
            price: 100,
            room_availability: true,
            photos: 'test photos path 1',
        }
        axios.post('api/room', room).then(
            response => {
                console.log(response);
                console.log(history);
                console.log('test');
                history.push('/')
            }
        ).catch(
            error => {
                this.setState({
                    errors: error.response
                })
            }
        )
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
