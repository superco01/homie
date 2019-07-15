import React, { Component } from 'react'
import {Divider, ButtonBase, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Paper, withStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

const styles = {
  root: {
      backgroundColor: '#FFC107'
  },
  content: {
      backgroundColor: '#FFA000'
  },
  button: {
      backgroundColor: '#26C6DA'
  },
}

class HomestayDetail extends Component {
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
        
        axios.get(`/homiehosting/public/api/homestay/${homestayId}`)
            .then(homestay => {
                this.setState({ homestay: homestay.data});
                // return homestay.data;
            })
            .then(() => {
              const data = {
                homestay_id: homestayId,
                checkin_date: this.props.match.params.checkin,
                duration: this.props.match.params.duration
              }
              axios.post('/homiehosting/public/api/roomList/', data)
              .then(response => {
                console.log("roomlist");
                console.log(response.data);
                
                this.setState({ rooms: response.data.room, roomCount: response.data.roomCount });
              })
            })
    }

    render() {
        return (
          <div>
          <Container style={{paddingTop: 50, paddingBottom: 100, paddingLeft: 180, paddingRight: 180}}>
            {/* {this.state.homestay ? ( */}
              <Container>
                <Container spacing={3} style={{paddingBottom: 25}}>
                  <Card spacing={3}>
                    <CardMedia
                      style={{height: 0, paddingTop: '56.25%'}}
                      image={this.state.homestay.photo1}
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
                <Divider variant="fullWidth"/>
                {/* <Container spacing={2}> */}
                { this.state.rooms.map(room =>(
                  <Container key={room.id}  style={{paddingTop: 25, paddingBottom: 25}}>
                    <Paper>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase style={{ width: 128 , height: 128 }}>
                            <img style={{ margin: 1, display: 'block', maxWidth: '100%', maxHeight: '100%' }} alt="complex" src={room.photos}/>
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography variant="h6" >
                                Room Number: {room.room_number}
                              </Typography>
                            </Grid>
                            <Divider/>
                            <Grid item xs>
                              <Typography variant="body1">
                                Room Type: {room.type}
                              </Typography>
                              <Typography variant="body1">
                                {room.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={4} container>
                          <Grid item xs={12} >
                            <Grid item xs={12}>
                              <Typography variant="h6">
                                Rp {room.price},-
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Button
                              className={this.props.classes.button} 
                              variant="contained" 
                              // color="primary" 
                              component={Link} 
                              to={`/order/${room.id}/${this.props.match.params.checkin}/${this.props.match.params.duration}`}>
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

export default withStyles(styles)(HomestayDetail);