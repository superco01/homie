import React, { Component } from 'react'
import {Divider, ButtonBase, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'
import Login from './Login';


class RoomManagement extends Component {
    constructor() {
        super()
        this.state = {
            toggle: {},
            homestay: [],
            roomCount: 0,
            rooms: [],
            errors: [],
        }
        this.checkin = this.checkin.bind(this)
    }

    checkin(e) {
        console.log("check in------");
        console.log(e);
        const checkin = {
            order_id: e.id,
            guest_name: e.guest
        }
        console.log(checkin);
        
        axios.post('api/checkin', checkin, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')} })
        .then((response) => {
            console.log(response);
            // this.setState({ toggle: response.data })
            // const homestayId= this.props.match.params.id
            const data = {homestay_id : JSON.parse(localStorage.getItem('id'))}
            axios.post(`api/roomAvailability`, data, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')} })
        .then(response => {
            // console.log(response.data[1].orders[0].name);
          this.setState({ rooms: response.data });
          console.log(this.state.rooms);
        })
        })
    }
    checkout(e) {
        console.log("check out------");
        console.log(e);
        const checkout = {
            order_id: e.id,
            guest_name: e.guest
        }
        console.log(checkout);
        
        axios.post('api/checkout', checkout, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')} })
        .then((response) => {
            console.log(response);
            // this.setState({ toggle: response.data })
            // const homestayId= this.props.match.params.id
            const data = {homestay_id : JSON.parse(localStorage.getItem('id'))}
            axios.post(`api/roomAvailability`, data, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')} })
        .then(response => {
            // console.log(response.data[1].orders[0].name);
          this.setState({ rooms: response.data });
          console.log(this.state.rooms);
        })
        })
    }

    componentDidMount() {
        // const homestayId= this.props.match.params.id
        const data = {homestay_id : JSON.parse(localStorage.getItem('id'))}
        axios.post(`api/roomAvailability`, data, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')} })
        .then(response => {
            // console.log(response.data[1].orders[0].name);
          this.setState({ rooms: response.data });
          console.log(this.state.rooms);
        })
    }

    render() {
        // console.log(this.state.rooms[0].id);
        if (this.state.rooms.length > 0) {
            console.log(this.state.rooms);
        }
        
        return (
          <div>
          <Container style={{paddingTop: 50, paddingBottom: 100, paddingLeft: 180, paddingRight: 180}}>
            {/* {this.state.homestay ? ( */}
                <Paper>
                { this.state.rooms.map(room =>(
                    <div key={room.id}>
                  <Container key={room.id}  style={{paddingTop: 15, paddingBottom: 15}}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                              <Typography variant="h6" >
                                Room Number : {room.room_number}
                              </Typography>
                            </Grid>
                            <Divider/>
                            <Grid item xs>
                            {room.orders[room.orders.length-1] != null? (
                                        <div>
                                            {room.orders[room.orders.length-1].order_meta[0] != null? (
                                                <div>
                                                <Typography>Guest Name : {room.orders[room.orders.length-1].guest}</Typography>
                                                <Typography>Duration of Stay     : {room.orders[room.orders.length-1].duration}</Typography>
                                                </div>
                                            ) : ("")}
                                        {/* <Typography>Guest Name : {room.orders[room.orders.length-1].guest}</Typography>
                                        <Typography>Status     : {room.orders[room.orders.length-1].transaction_status}</Typography> */}
                                        </div>
                                    ) : ("")}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item sm={3} container>
                        {room.orders[room.orders.length-1] != null? (
                            <div>
                            {room.orders[room.orders.length-1].order_meta[0] != null? (
                            <div>
                            <Grid container spacing={1} direction="column" >
                            <Grid item>
                            {room.orders[room.orders.length-1].transaction_status == 'active'? (
                                <Button onClick={()=>this.checkout(room.orders[room.orders.length-1])} fullWidth variant="contained" color="secondary">
                                    CHECK-OUT
                                </Button>
                            ) : (
                                <Button onClick={()=>this.checkin(room.orders[room.orders.length-1])} fullWidth variant="contained" color="primary">
                                    CHECK-IN
                                </Button>
                            )}
                            </Grid>
                            <Grid item>
                                <Typography><Button fullWidth color="secondary" variant="outlined">Check-out: {room.orders[room.orders.length-1].checkout_date}</Button></Typography>
                            </Grid>
                            </Grid>
                            </div>) : (
                            <Grid><Button variant="contained">
                            EMPTY
                            </Button></Grid>)}
                            </div>
                            ) : (<Grid><Button variant="contained">
                            EMPTY
                            </Button></Grid>)}
                        </Grid>
                      </Grid>
                  </Container>
                  <Divider variant="fullWidth"/>
                  </div>
                )) }
                    </Paper>
            </Container>
            </div>
        )
    }
}

export default RoomManagement