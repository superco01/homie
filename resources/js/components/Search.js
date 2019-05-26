import React, {Component} from 'react'
import {Grid, TextField} from '@material-ui/core'
import HomestayList from './HomestayList';


class Search extends Component {
    constructor() {
        super()
        this.state = {
            location: '',
            guests: '',
            rooms: '',
            date: [],
            duration: '',
            homestays: [],
        }
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
        return (
            <div>
                {/* {this.state.location ? ( */}
                    <div>
                        <TextField
                        style={{padding: 24}}
                        id="searchInput"
                        placeholder="Location"
                        margin="normal"
                        onChange={this.onSearchLocationInputChange}
                        />

                        <Grid
                        container
                        spacing={3}
                        style={{padding: 24}}
                        >
                            { this.state.homestays.map(homestay => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <HomestayList key={homestay.id} homestay={homestay}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                {/* ) : "nah nah" } */}
            </div>
        )
    }
}

export default Search