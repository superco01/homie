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

class OwnerHomestay extends Component {
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
        // const homestayId= this.props.match.params.id
        console.log(this.props);
        
        const homestayId= 1
        
        axios.get(`api/homestay/${JSON.parse(localStorage.getItem('homestayId'))}`)
            .then(homestay => {
                this.setState({ homestay: homestay.data});
                // return homestay.data;
            })
            .catch( error => {
              if (error.response.status == 500) {
                this.props.history.push(`/addhomestay/${JSON.parse(localStorage.getItem('id'))}`);
              }
            })
    }

    render() {
        return (
          <div>
          <Container style={{paddingTop: 50, paddingBottom: 100, paddingLeft: 180, paddingRight: 180}}>
              <Container>
                <Container spacing={3} style={{paddingBottom: 25}}>
                  <Card spacing={3}>
                    <CardMedia
                      style={{height: 0, paddingTop: '56.25%'}}
                      image={this.state.homestay.photo1}
                      title={this.state.homestay.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="header">
                          {this.state.homestay.name}
                      </Typography>
                      <Typography gutterBottom variant="caption" component="header">
                          {this.state.homestay.location}
                      </Typography>
                      <Typography gutterBottom variant="caption" component="header">
                          {this.state.homestay.address}
                      </Typography>
                      <Typography component="p">
                          Facilities : {this.state.homestay.facilities}
                      </Typography>
                      <Typography component="p">
                          Total Rooms : {this.state.homestay.number_of_rooms}
                      </Typography>
                      <Divider/>
                      <Grid style={{marginTop:4}} container spacing={2} justify="flex-end" >
                        <Button 
                        component={Link}
                        to={`/edithomestay/${this.state.homestay.id}`}
                        style={{margin:2}} 
                        className={this.props.classes.button}>
                          Edit Homestay
                        </Button>
                        <Button 
                        component={Link}
                        to={`/editrooms/${this.state.homestay.id}`}
                        style={{margin:2}} 
                        className={this.props.classes.button}>
                          Edit Rooms
                        </Button>
                      </Grid>
                    </CardContent>
                  </Card>
                </Container>
                <Divider variant="fullWidth"/>
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
                </Container>
            </Container>
            </div>
        )
    }
}

export default withStyles(styles)(OwnerHomestay);