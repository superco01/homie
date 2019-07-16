import React, {Component} from 'react'
import {Grid, TextField, Paper, Container, Button, ButtonBase, Divider, FormControl, OutlinedInput, InputLabel, Select, MenuItem, Typography} from '@material-ui/core'
import HomestayList from './HomestayList';
import SearchResult from './SearchResult';
import { withStyles, ThemeProvider, withTheme } from '@material-ui/styles';

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

class Search extends Component {
    constructor(props) {
        super(props)
        var currentDate = new Date()
        var date = currentDate.toISOString().substr(0,10)
        this.state = {
            location: 'Select Location',
            duration: 1,
            checkinDate: date,

            guests: '',
            rooms: '',
            homestays: [],

            isSearch: false,
            labelWidth: 0,
        }
        
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }
    handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    componentDidMount() {
        console.log(localStorage);
        axios.post('/public/api/homestaySearch',{
            room_availability: 1,
        })
        .then(response => {
            this.setState({ homestays: response.data.homestaySearch})
            // console.log(this.state.homestays);
        })
        // axios.get('/api/homestay')
        //     .then(response => {
        //         return response;
        //     })
        //     .then(response => {
        //         this.setState({ homestays: response.data });
        //     })
    }

    onSearch() {
        console.log('on search click');
        // this.setState({labelWidth: InputLabel.current.offsetWidth})
        const data = {
            location: this.state.location,
            checkin_date: this.state.checkinDate,
            duration: this.state.duration,
        }
        axios.post('/api/homestaySearch', data)
        .then(response => {
            this.setState({ homestays: response.data.homestaySearch})
            // console.log(this.state.homestays);
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
        console.log(this.state);
        return (
            <div>
                {/* {this.state.location ? ( */}
                    <div>
                        <Container
                        style={{padding: 30, paddingLeft: 150, paddingRight: 150}}>
                        <Paper>
                            <Grid alignItems="center" container spacing={2} style={{margin: 12, paddingBottom: 12}}>
                                <Grid item md={3}>
                                <Typography color="textSecondary">Location</Typography>
                                <FormControl variant="outlined">
                                    {/* <TextField disabled value="Location" htmlFor="outlined-location-simple">
                                    </TextField> */}
                                    <Select
                                    value={this.state.location}
                                    onChange={this.handleFieldChange}
                                    input={<OutlinedInput labelWidth={this.state.labelWidth} name="location" id="outlined-location-simple" />}
                                    >
                                    <MenuItem value="Select Location">
                                        Select Location
                                    </MenuItem>
                                    <MenuItem value={'Bukit Raya'}>Bukit Raya</MenuItem>
                                    <MenuItem value={'Rumbai'}>Rumbai</MenuItem>
                                    <MenuItem value={'Marpoyan Damai'}>Marpoyan Damai</MenuItem>
                                    <MenuItem value={'Simpang Baru'}>Simpang Baru</MenuItem>
                                    <MenuItem value={'Pekanbaru'}>Pekanbaru</MenuItem>
                                    <MenuItem value={'Tampan'}>Tampan</MenuItem>
                                    </Select>
                                </FormControl>
                                </Grid>
                                <Grid item md={3}>
                                <TextField
                                    id="date"
                                    name="checkinDate"
                                    label="Check-in"
                                    type="date"
                                    value={this.state.checkinDate}
                                    onChange={this.handleFieldChange}
                                    style={{marginTop: 24}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                </Grid>
                                <Grid item md={2}>
                                <TextField
                                    id="outlined-number"
                                    name="duration"
                                    label="Duration"
                                    type="number"
                                    value={this.state.duration}
                                    onChange={this.handleFieldChange}
                                    style={{marginTop: 24}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                </Grid>
                                <Grid item sm={12} md={2} align="right">
                                    <Button
                                        className={this.props.classes.button}
                                        variant="contained"
                                        // color="primary"
                                        style={{padding: 20, marginRight: 30, marginLeft:150, marginTop: 30, marginBottom: 30}}
                                        onClick={this.onSearch}
                                        >Search
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                        </Container>
                        <Container
                        style={{padding: 20, paddingLeft: 150, paddingRight: 150}}>
                        <Grid
                        container
                        spacing={4}
                        // style={{padding: 20, paddingLeft: 150, paddingRight: 150}}
                        >
                            { this.state.homestays == ''? (
                                <Grid item xs={12}>
                                    <Paper style={{ padding: 50}}>
                                        <Typography align="center" variant="h3">Homestay Not Found</Typography>
                                    </Paper>
                                </Grid>
                            ) : (
                                ''
                            )}
                            { this.state.homestays.map(homestay => (
                                // <ThemeProvider theme={styles}>
                                <Grid item xs={12} key={homestay.id} >
                                    <HomestayList className={this.props.classes} key={homestay.id} homestay={homestay} checkinDate={this.state.checkinDate} duration={this.state.duration}/>
                                </Grid>
                                // </ThemeProvider>
                            ))}
                        </Grid>
                        </Container>
                    </div>
                {/* ) : "nah nah" } */}
            </div>
        )
    }
}

export default withStyles(styles)(Search);