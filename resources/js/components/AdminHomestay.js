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

class AdminHomestay extends Component {
    constructor() {
        super()
        this.state = {
            owners: [],
            homestays: [],
            roomCount: 0,
            rooms: [],
            errors: [],
        }
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete(e) {
      console.log(e);

      const deleteHomestay = {
        id: e,
      }
      console.log(deleteHomestay);
      

      axios.post('/api/admindeletehomestay', deleteHomestay, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')}})
      .then((response) => {
        console.log(response);
        axios.get(`/api/adminhomestay/`, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')}})
              .then(response => {
                console.log(response.data);
                
                this.setState({ homestays: response.data });
              })
      })
      
    }

    componentDidMount() {
        const homestayId= this.props.match.params.id
        
        // axios.get(`/api/homestay/${homestayId}`)
        //     .then(homestay => {
        //         this.setState({ homestay: homestay.data});
        //         // return homestay.data;
        //     })
        //     .then(() => {
              // const data = {
              //   homestay_id: homestayId,
              //   checkin_date: this.props.match.params.checkin,
              //   duration: this.props.match.params.duration
              // }
              console.log(localStorage);
              
              axios.get(`/api/adminhomestay/`, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')}})
              .then(response => {
                console.log(response.data);
                
                this.setState({ homestays: response.data });
              })
            // })
    }

    render() {
        return (
          <div>
          <Container style={{paddingTop: 50, paddingBottom: 100, paddingLeft: 120, paddingRight: 120}}>
            {this.state.homestays != '' ? (
              <Container>
                <Container>
                    <Typography style={{padding: 50}} container align="center" component="h1" variant="h4">
                        Homestay List
                    </Typography>
                </Container>
                { this.state.homestays.map(homestay =>(
                    <Paper>
                  <Container key={homestay.id}  style={{paddingTop: 15, paddingBottom: 15}}>
                    {/* <Divider/> */}
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography variant="h6" >
                                Name : {homestay.name}
                              </Typography>
                            </Grid>
                            {/* <Divider/> */}
                            <Grid item xs>
                              <Typography variant="body1">
                                Location : {homestay.location}
                              </Typography>
                              <Typography variant="body1">
                                Address : {homestay.address}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={3} container>
                          <Grid item xs={12} >
                            <Grid item xs={12}>
                              {/* <Typography variant="h6">
                                Rp {homestay.price},-
                              </Typography> */}
                            </Grid>
                            <Grid item xs={12} direction="column">
                                <ButtonBase justify="center" style={{ width: 128 , height: 128 }}>
                                  <Button
                                  onClick={()=>this.onDelete(homestay.id)}
                                  // className={this.props.classes.button} 
                                  variant="contained"
                                  color="secondary" 
                                  // component={Link} 
                                  // to={`/editroom/${room.id}`}
                                  >
                                    Delete Homestay
                                  </Button>
                                </ButtonBase>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                  </Container>
                      <Divider/>
                    </Paper>
                )) }
                {/* </Container> */}
                </Container>
                ) : 
                <Container>
                    <Paper>
                    <Typography style={{padding: 50}} container align="center" component="h1" variant="h4">
                        No Homestay Registered
                    </Typography>
                    </Paper>
                </Container>}
            </Container>
            </div>
        )
    }
}

export default withStyles(styles)(AdminHomestay);
