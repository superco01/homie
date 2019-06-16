import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Grid, Hidden, Card, CardActionArea, CardContent, CardMedia, Button, Typography, Container, Paper} from '@material-ui/core'

class OwnerHomestay extends Component {
    constructor() {
        super()
        this.state = {
            id_user: '',
            name: '',
            email: '',
            homestays: [],
        }

    }

    componentDidMount() {
        axios.get('api/owner', {
            headers: {Authorization: `Bearer ${localStorage.usertoken}`}
        }).then(response => {
            return response.data            
        }).catch(error => {
            console.log(error);
        }).then(response => {
            this.setState({
                id_user: response.user.id,
                name: response.user.name,
                email: response.user.email,
            })
            axios.get(`/api/homestay/${this.state.id_user}`)
                .then(response => {
                    this.setState({ homestays: response.data });
                })
        })
    }

    render() {
        console.log(this.state);
        const featuredPosts = [
            {
              title: 'Featured post',
              date: 'Nov 12',
              description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            },
            {
              title: 'Post title',
              date: 'Nov 11',
              description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            },
          ];
        return (
            <div>
                <Container>
            <Grid container spacing={20} >
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card >
                    <div >
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        
                        image="/images/evelyn-paris-96422-unsplash.jpg"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
                </Container>
            </div>
        //     <Paper style={{padding: 50}}>
        //         {this.state.homestays ? (
        //             <Card>
        //                 <CardMedia
        //                 style={{height: 0, paddingTop: '56.25%'}}
        //                 image="/images/evelyn-paris-96422-unsplash.jpg"
        //                 title={this.state.homestays}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="caption" component="header">
        //                         {this.state.homestays.name}
        //                     </Typography>
        //                     <Typography component="p">
        //                         {this.state.homestays.address}
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions>
        //                     <Button component={Link} to={`/homestay/${this.state.homestays.id}`}>
        //                         Select Room
        //                     </Button>
        //                 </CardActions>
        //             </Card>
        //         ) : "Empty"}
        //     </Paper>
        )
    }
}

export default OwnerHomestay;