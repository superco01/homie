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

class AdminOwner extends Component {
    constructor() {
        super()
        this.state = {
            owners: [],
            homestay: [],
            roomCount: 0,
            rooms: [],
            errors: [],
        }
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete(e) {
      console.log(e);

      const deleteOwner = {
        id: e,
      }

      axios.post('/api/admindeleteowner', deleteOwner, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')}})
      .then((response) => {
        console.log(response);
        axios.get(`/api/adminowner/`, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')}})
              .then(response => {
                console.log(response.data);
                
                this.setState({ owners: response.data });
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
              axios.get(`/api/adminowner/`, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')}})
              .then(response => {
                console.log(response.data);
                
                this.setState({ owners: response.data });
              })
            // })
    }

    render() {
        return (
          <div>
          <Container style={{paddingTop: 50, paddingBottom: 100, paddingLeft: 120, paddingRight: 120}}>
            {this.state.owners != '' ? (
              <Container>
                <Container>
                    <Typography style={{padding: 50}} container align="center" component="h1" variant="h4">
                        Owner List
                    </Typography>
                </Container>
                { this.state.owners.map(owner =>(
                    <Paper>
                  <Container key={owner.id}  style={{paddingTop: 15, paddingBottom: 15}}>
                    {/* <Divider/> */}
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography variant="h5" >
                                Name : {owner.name}
                              </Typography>
                            </Grid>
                            {/* <Divider/> */}
                            <Grid item xs>
                              <Typography variant="h6">
                                Email : {owner.email}
                              </Typography>
                              {/* <Typography variant="body1">
                                {owner.description}
                              </Typography> */}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={3} container>
                          {/* <Grid item xs={12} > */}
                            {/* <Grid item xs={12}>
                              <Typography variant="h6">
                                Rp {owner.price},-
                              </Typography>
                            </Grid> */}
                            <Grid item xs={12}>
                                <ButtonBase style={{ width: 128 , height: 128 }}>
                                  <Button
                                  // className={this.props.classes.button} 
                                  onClick={()=>this.onDelete(owner.id)}
                                  variant="contained"
                                  color="secondary" 
                                  // component={Link} 
                                  // to={`/editroom/${room.id}`}
                                  >
                                    Delete Owner Account
                                  </Button>
                                </ButtonBase>
                            </Grid>
                          {/* </Grid> */}
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
                        No Owner Registered
                    </Typography>
                    </Paper>
                </Container>}
            </Container>
            </div>
        )
    }
}

export default withStyles(styles)(AdminOwner);
