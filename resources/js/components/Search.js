import React, {Component} from 'react'
import {Grid, TextField, Paper, Container, Button, ButtonBase, Divider} from '@material-ui/core'
import HomestayList from './HomestayList';
import SearchResult from './SearchResult';



class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            duration: 1,
            checkinDate: '16-06-2019',

            guests: '',
            rooms: '',
            homestays: [],

            isSearch: false,
            
            date: new Date()
        }
        // this.onSearch = this.onSearch.bind(this)
        // console.log(this.props);
    }
    
    // componentDidMount() {
    //     axios.post('/api/homestaySearch',{
    //         room_availability: 1,
    //     })
    //     .then(response => {
    //         this.setState({ homestays: response.data})
    //         console.log(this.state.homestays);
    //     })
    //     // axios.get('/api/homestay')
    //     //     .then(response => {
    //     //         return response;
    //     //     })
    //     //     .then(response => {
    //     //         this.setState({ homestays: response.data });
    //     //     })
    // }

    componentDidMount() {
        console.log('on search click');
        axios.post('/api/homestaySearch',{
            room_availability: 1,
        })
        .then(response => {
            this.setState({ homestays: response.data.homestaySearch})
            console.log(this.state.homestays);
        })
        // axios.get('/api/homestay')
        //     .then(response => {
        //         return response;
        //     })
        //     .then(response => {
        //         this.setState({ homestays: response.data });
        //     })
    }

    render() {
        console.log(this.state.checkinDate);
        
        return (
            <div>
                {/* {this.state.location ? ( */}
                    <div>
                        <Container
                        style={{padding: 30, paddingLeft: 150, paddingRight: 150}}>
                        <Paper>
                            <Grid container spacing={2} style={{margin: 12, paddingBottom: 12}}>
                                <Grid item>
                                    <TextField
                                        id="date"
                                        label="Check-in"
                                        type="date"
                                        // value={this.state.checkinDate}
                                        // className={classes.textField}
                                        style={{marginTop: 24, marginLeft:24}}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        style={{marginTop: 24}}
                                        id="searchInput"
                                        placeholder="Location"
                                        margin="normal"
                                        onChange={this.onSearchLocationInputChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        style={{padding: 16, margin:24}}
                                        onClick={this.onSearch}
                                        >Search
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Divider/>
                        {/* <Paper>
                        <TextField
                            id="date"
                            label="Check-in"
                            type="date"
                            defaultValue='12-12-2019'
                            // value={this.state.checkinDate}
                            // className={classes.textField}
                            style={{marginTop: 24, marginLeft:24}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                        style={{padding: 24}}
                        id="searchInput"
                        placeholder="Location"
                        margin="normal"
                        onChange={this.onSearchLocationInputChange}
                        />
                        <TextField
                        style={{padding: 24}}
                        id="searchInput"
                        placeholder="Location"
                        margin="normal"
                        onChange={this.onSearchLocationInputChange}
                        />
                        <Container xs={2} sm={1} md={2} lg={2}>
                        <Button
                        variant="contained"
                        color="primary"
                        style={{padding: 24, margin:24}}
                        onClick={this.onSearch}
                        >Search</Button>
                        </Container>
                        </Paper> */}
                        </Container>
                        <Container
                        style={{padding: 20, paddingLeft: 150, paddingRight: 150}}>
                        <Grid
                        container
                        spacing={4}
                        // style={{padding: 20, paddingLeft: 150, paddingRight: 150}}
                        >
                            { this.state.homestays.map(homestay => (
                                <Grid item xs={12} key={homestay.id} >
                                    <HomestayList key={homestay.id} homestay={homestay} checkinDate={this.state.checkinDate} duration={this.state.duration}/>
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

export default Search