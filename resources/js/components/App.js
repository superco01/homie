import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import axios from 'axios';
import HomestayDetails from './HomestayDetail';
import HomestayList from './HomestayList';
import Login from './Login';
import Register from './Register';
import OwnerHomestay from './OwnerHomestay';
import OrderForm from './OrderForm';
import AddHomestay from './AddHomestay';
import Payment from './Payment';
import EditHomestay from './EditHomestay';
import OwnerOrderList from './OwnerOrderList';
import EditRooms from './EditRooms';
import OwnerReport from './OwnerReport';
import RoomManagement from './RoomManagement';
import Footer from './Footer';
import EditRoom from './EditRoom';
import AdminOwner from './AdminOwner';
import AdminHomestay from './AdminHomestay';
import AdminOrder from './AdminOrder';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            homestays: [],
            errors: [],
            id_user: 1,
        }
    } 

    render() {
        
        return (
            <div>
                <HashRouter>
                    <div>
                        {/* <Header/> */}
                            <Route component={Header}/>
                        <Switch>
                            <Route exact path='/' component={Search}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/ownerhomestay' component={OwnerHomestay}/>
                            <Route path='/addhomestay/:id' component={AddHomestay}/>
                            <Route path='/edithomestay/:id' component={EditHomestay}/>
                            <Route path='/editrooms/:id' component={EditRooms}/>
                            <Route path='/editrooms/:id' component={EditRooms}/>
                            <Route path='/editroom/:id' component={EditRoom}/>
                            <Route path='/orderlist/:id' component={OwnerOrderList}/>
                            <Route path='/homestay/:id?/:checkin?/:duration?' component={HomestayDetails}/>
                            <Route path='/order/:id?/:checkin?/:duration?' component={OrderForm}/>
                            <Route path='/payment/:id' component={Payment}/>
                            <Route path='/report' component={OwnerReport}/>
                            <Route path='/roommanagement/' component={RoomManagement}/>
                            {/* Admin Route */}
                            <Route path='/admowner' component={AdminOwner}/>
                            <Route path='/admhomestay' component={AdminHomestay}/>
                            <Route path='/admorder' component={AdminOrder}/>

                        </Switch>
                        <Footer/>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
