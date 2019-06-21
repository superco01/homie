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
        
        axios.post('/api/checkin', checkin)
        .then((response) => {
            console.log(response);
            // this.setState({ toggle: response.data })
            const homestayId= this.props.match.params.id
            const data = {homestay_id : homestayId}
            axios.post(`/api/roomAvailability`, data)
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
        
        axios.post('/api/checkout', checkout)
        .then((response) => {
            console.log(response);
            // this.setState({ toggle: response.data })
            const homestayId= this.props.match.params.id
            const data = {homestay_id : homestayId}
            axios.post(`/api/roomAvailability`, data)
        .then(response => {
            // console.log(response.data[1].orders[0].name);
          this.setState({ rooms: response.data });
          console.log(this.state.rooms);
        })
        })
    }


    componentDidMount() {
        const homestayId= this.props.match.params.id
        const data = {homestay_id : homestayId}
        axios.post(`/api/roomAvailability`, data)
        .then(response => {
            // console.log(response.data[1].orders[0].name);
          this.setState({ rooms: response.data });
          console.log(this.state.rooms);
        })
    }

    render() {
        return (
          <div>
          <Container style={{paddingTop: 50, paddingBottom: 100, paddingLeft: 100, paddingRight: 100}}>
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
                            {room.orders[0] != null? (
                                        <div>
                                        <Typography>Guest Name : {room.orders[0].guest}</Typography>
                                        <Typography>Status     : {room.orders[0].transaction_status}</Typography>
                                        </div>
                                    ) : ("")}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item sm={3} container>
                        {room.orders[0] != null? (
                            <Grid container spacing={1} direction="column" >
                            <Grid item>
                            {room.orders[0].transaction_status == 'active'? (
                                <Button onClick={()=>this.checkout(room.orders[0])} fullWidth variant="contained" color="secondary">
                                    CHECK-OUT
                                </Button>
                            ) : (
                                <Button onClick={()=>this.checkin(room.orders[0])} fullWidth variant="contained" color="primary">
                                    CHECK-IN
                                </Button>
                            )}
                                
                            </Grid>
                            <Grid item>
                                <Typography><Button fullWidth color="secondary" variant="outlined">Check-out: {room.orders[0].checkout_date}</Button></Typography>
                            </Grid>
                            </Grid>
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