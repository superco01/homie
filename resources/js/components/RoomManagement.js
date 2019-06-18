import React, { Component } from 'react'
import {Divider, ButtonBase, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'


class RoomManagement extends Component {
    constructor() {
        super()
        this.state = {
            homestay: [],
            roomCount: 0,
            rooms: [],
            errors: [],
        }
    }

    componentDidMount() {
        const homestayId= this.props.match.params.id
        const data = {homestay_id : homestayId}
        
        axios.post(`/api/roomAvailability`, data)
        .then(response => {
            console.log(response);
            
          this.setState({ rooms: response.data });
        })
        // axios.get(`/api/homestay/${homestayId}`)
        //     .then(homestay => {
        //         this.setState({ homestay: homestay.data});
        //         // return homestay.data;
        //     })
            // .then(() => {
            // })
    }

    render() {
        return (
          <div>
          <Container style={{paddingTop: 50, paddingBottom: 100, paddingLeft: 150, paddingRight: 150}}>
            {/* {this.state.homestay ? ( */}
              <Container>
                {/* <Container spacing={3} style={{paddingBottom: 25}}>
                  <Card spacing={3}>
                    <CardMedia
                      style={{height: 0, paddingTop: '56.25%'}}
                      image="/images/evelyn-paris-96422-unsplash.jpg"
                      title={this.state.homestay.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="caption" component="header">
                          {this.state.homestay.name}
                      </Typography>
                      <Typography component="p">
                          Facilities : {this.state.homestay.facilities}
                      </Typography>
                      <Typography component="p">
                          Total Rooms : {this.state.roomCount} from {this.state.homestay.number_of_rooms}
                      </Typography>
                    </CardContent>
                  </Card>
                </Container>
                <Divider variant="fullWidth"/> */}
                {/* <Container spacing={2}> */}
                { this.state.rooms.map(room =>(
                  <Container key={room.id}  style={{paddingTop: 25, paddingBottom: 25}}>
                    <Paper>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase style={{ width: 128 , height: 128 }}>
                            <img style={{ margin: 1, display: 'block', maxWidth: '100%', maxHeight: '100%' }} alt="complex" src="/images/evelyn-paris-96422-unsplash.jpg"/>
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography variant="h6" >
                                {room.type}
                              </Typography>
                            </Grid>
                            <Divider/>
                            <Grid item xs>
                              <Typography variant="body1">
                                {room.room_number}
                              </Typography>
                              <Typography variant="body1">
                                {room.price}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item sm container>
                          <Grid item xs={12} >
                            <Grid item xs={12}>
                              <Typography variant="h6">
                                Rp {room.price},-
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Button variant="contained" color="primary" component={Link} to={`/order/${room.id}/${this.props.match.params.checkin}/${this.props.match.params.duration}`}>
                                Select Room
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Container>
                )) }
                {/* </Container> */}
                </Container>
                {/* ) : <Paper>Not Found</Paper>} */}
            </Container>
            </div>
        )
    }
}

export default RoomManagement