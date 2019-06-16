import React, {Component} from 'react'
import {Grid, TextField, Paper, Container} from '@material-ui/core'
import HomestayList from './HomestayList';



class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            duration: 0,
            checkinDate: '',

            guests: '',
            rooms: '',
            homestays: [],
            
            date: new Date()
        }
        // console.log(this.props);
    }
    
    componentDidMount() {
        axios.get('/api/homestay')
            .then(response => {
                return response;
            })
            .then(response => {
                this.setState({ homestays: response.data });
            })
    }

    render() {
        console.log(this.state.checkinDate);
        
        return (
            <div>
                {/* {this.state.location ? ( */}
                    <div>
                        <Container
                        style={{padding: 20, paddingLeft: 150, paddingRight: 150}}>
                        <Grid
                        container
                        spacing={4}
                        // style={{padding: 20, paddingLeft: 150, paddingRight: 150}}
                        >
                            { this.state.homestays.map(homestay => (
                                <Grid item xs={12} key={homestay.id} >
                                    <HomestayList key={homestay.id} homestay={homestay}/>
                                </Grid>
                            ))}
                        </Grid>
                        </Container>
                    </div>
                {/* ) : "nah nah" } */}
            </div>
        )
    }
}

export default SearchResult