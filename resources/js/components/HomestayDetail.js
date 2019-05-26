import React, { Component } from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'


class HomestayDetail extends Component {
    constructor() {
        super()
        this.state = {
            homestay: [],
            errors: [],
        }
    }

    componentDidMount() {
        console.log("Fetch data");
        const homestayId= this.props.match.params.id
        console.log(this.props);
        
        axios.get(`/api/homestay/${homestayId}`)
            .then(response => {
                return response;
            })
            .then(homestay => {
                this.setState({ homestay: homestay.data});
            });
        console.log(this.state.homestay);
        
    }

    render() {
        return (
            <div>
                {this.state.homestay ? (
                    <Card>
                        <CardMedia
                        style={{height: 0, paddingTop: '56.25%'}}
                        image="asd"
                        title={this.state.homestay.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="caption" component="header">
                                {this.state.homestay.id}
                            </Typography>
                            <Typography component="p">
                                {this.state.homestay.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to={`/homestay/${this.state.homestay.id}`}>
                                Select Room
                            </Button>
                        </CardActions>
                    </Card>
                ) : "Empty"}
            </div>
        )
    }
}

export default HomestayDetail