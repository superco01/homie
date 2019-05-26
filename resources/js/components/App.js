import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import axios from 'axios';
import HomestayDetails from './HomestayDetail';
import HomestayList from './HomestayList';

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
        // axios.get(`/api/homestay/${this.state.id_user}`)
        //     .then(response => {
        //         return response;
        //     })
        //     .then(homestay => {
        //         this.setState({ homestays: homestay.data});
        //     });
        // axios.get('/api/homestay')
        //     .then(response => {
        //         return response;
        //     })
        //     .then(homestay => {
        //         this.setState({ homestays: homestay.data });
        //         console.log(homestay);
        //         console.log(this.state.homestays);
        //     })
        // fetch('/api/homestay')
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(homestays => {
        //         this.setState({ homestays });
        //     })

        const { history } = this.props
        // const homestay = {
        //     id_user: this.state.id_user,
        //     name: 'test 1',
        //     location: 'loc 1',
        //     address: 'address 1',
        //     facilities: 'fac 1',
        //     number_of_rooms: 6,
        // }
        // axios.post('api/homestay', homestay)
        // .then(res => {
        //         history.push('/')
        //     }
        // ).catch(
        //     error => {
        //         this.setState({
        //             errors: error.response
        //         })
        //     }
        // )
        // const room = {
        //     id_homestay: 1,
        //     title: 'test room 1',
        //     description: 'test desc room 1',
        //     price: 100,
        //     room_availability: true,
        //     photos: 'test photos path 1',
        // }
        // axios.post('api/room', room).then(
        //     response => {
        //         history.push('/')
        //     }
        // ).catch(
        //     error => {
        //         this.setState({
        //             errors: error.response
        //         })
        //     }
        // )
    }

    render() {
        
        return (
            <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Search}/>
                    <Route path='/homestay/:id' component={HomestayDetails}/>
                </Switch>
                </div>
            </Router>
            
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
