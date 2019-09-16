import React, {Component} from 'react'
import { InputLabel, inputLabel, Grid, TextField, Paper, Container, Button, ButtonBase, Divider, FormControl, OutlinedInput, Select, MenuItem, Typography, FilledInput } from '@material-ui/core'
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
        // console.log(localStorage);
        // this.setState({labelWidth: inputLabel.current.offsetWidth})
        axios.post('api/homestaySearch',{
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
        axios.post('api/homestaySearch', data)
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
                        <Container style={{padding: 30, paddingLeft: 140, paddingRight: 140}}>
                        <Paper style={{ padding: 50 }}>
                            <Grid alignItems="center" justify="space-between" container spacing={2}>
                                <Grid item>
                                {/* <Typography color="textSecondary">Location</Typography> */}
                                <FormControl variant="filled">
                                    {/* <TextField disabled value="Location" htmlFor="outlined-location-simple">
                                    </TextField> */}
                                    <InputLabel htmlFor="filled-age-simple">
                                        Location
                                    </InputLabel>
                                    <Select
                                    // variant='outlined'
                                    value={this.state.location}
                                    onChange={this.handleFieldChange}
                                    input={<FilledInput name="location" id="filled-location-simple" />}
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
                                <Grid item>
                                <TextField
                                    // max={moment().format("YYYY-MM-DD")}
                                    id="date"
                                    name="checkinDate"
                                    label="Check-in"
                                    type="date"
                                    value={this.state.checkinDate}
                                    onChange={this.handleFieldChange}
                                    // style={{marginTop: 24}}
                                    InputProps={{ inputProps: { min: this.state.checkinDate} }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                                </Grid>
                                <Grid item xs={2}>
                                <TextField
                                    id="outlined-number"
                                    name="duration"
                                    label="Duration"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1, max: 14 } }}
                                    value={this.state.duration}
                                    onChange={this.handleFieldChange}
                                    // style={{marginTop: 24}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                                </Grid>
                                <Grid container justify="flex-end" direction="row" item md={2}>
                                    <Grid item xs={12}>
                                    <Button
                                        // xs={2}
                                        className={this.props.classes.button}
                                        variant="contained"
                                        // color="primary"
                                        style={{ paddingTop: 18, paddingBottom: 18 }}
                                        // style={{padding: 20, marginRight: 30, marginLeft:15, marginTop: 3, marginBottom: 3}}
                                        onClick={this.onSearch}
                                        fullWidth
                                        >Search
                                    </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        </Container>
                        <Container
                        style={{padding: 20, paddingLeft: 140, paddingRight: 140}}>
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