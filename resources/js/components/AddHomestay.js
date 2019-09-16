import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AndoridOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageUploader from 'react-images-upload';
import { Paper, Divider, FormControl, Select, OutlinedInput, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddHomestay(props) {
  const classes = useStyles();

  const [pictures, setPictures] = React.useState([])

  const [name, setName] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [facilities, setFacilities] = React.useState('')
  const [numberOfRooms, setNumberOfRooms] = React.useState('')

  const [type, setType] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [photos, setPhotos] = React.useState('')
  const [price, setPrice] = React.useState('')
 
  function onDrop(picture) {
    console.log(picture);
    
    setPictures(pictures.concat(picture));
  }

  function onSubmit(e) {
      e.preventDefault()
      console.log(pictures);
      let photo1Temp = null;
      let photo2Temp = null;
      const userId = JSON.parse(localStorage.getItem('id'))
      if (pictures[pictures.length - 2] != null) {
        photo1Temp = pictures[pictures.length - 2].name
      }
      if (pictures[pictures.length - 1] != null) {
        photo2Temp = pictures[pictures.length - 1].name
      }
      
      const addNewHomestay = {
        user_id: userId,
        name: name,
        location: location,
        address: address,
        facilities: facilities,
        number_of_rooms: numberOfRooms,
        photo1: photo1Temp,
        photo2: photo2Temp,
        description: description,
      }

      console.log(addNewHomestay);
      

      axios.post(`api/homestay`, addNewHomestay, {
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        const data = response.data;
        console.log('set local storage homestay id');
        
        localStorage.setItem('homestayId', data.id)
        const addNewRoom = {
            homestay_id: data.id,
            type: 'Single',
            // description: description,
            photos: photos,
            price: price,
            // room_availability: 0
          }
          console.log(addNewRoom);
          

        axios.post(`api/room`, addNewRoom)
        console.log(response);
        alert('Homestay Added')
        props.history.push('/ownerhomestay')
      }).catch(error => {
        alert('Field should not empty')
        console.log(error);
      })
  }

  return (
    <Container style={{paddingBottom: 80}} component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Add Homestay
        </Typography>
        <form className={classes.form} noValidate>
        <Grid justify="center" container spacing={2}>
          <Grid item sm={6} md={6} >
            <Grid item  >
              <TextField style={{marginBottom: 12}}
                value={name}
                onChange={event => setName(event.target.value)}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            {/* <Grid item  >
              <TextField style={{marginBottom: 12}}
                value={location}
                onChange={event => setLocation(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
              />
            </Grid> */}
            <Grid item >
                <Typography color="textSecondary">Location</Typography>
                <FormControl variant="outlined" style={{ minWidth: '100%', marginBottom: 12 }}>
                    <Select
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    input={<OutlinedInput placeholder="LOCATION" labelWidth={10} name="location" id="outlined-location-simple" />}
                    >
                    <MenuItem value="Select Location" >
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
            <Grid item  >
              <TextField style={{marginBottom: 12}}
                value={address}
                onChange={event => setAddress(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item  >
              <TextField style={{marginBottom: 12}}
                value={facilities}
                onChange={event => setFacilities(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="facilities"
                label="Facilities"
                name="facilities"
                autoComplete="facilities"
              />
            </Grid>
            <Grid item  >
              <TextField style={{marginBottom: 12}}
                value={numberOfRooms}
                onChange={event => setNumberOfRooms(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="numberOfRooms"
                label="Number of Rooms"
                name="numberOfRooms"
                autoComplete="numberOfRooms"
              />
            </Grid>
            <Grid item  >
              <TextField style={{marginBottom: 12}}
                value={description}
                onChange={event => setDescription(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
              />
            </Grid>
            <Grid item  >
              <TextField style={{marginBottom: 12}}
                value={price}
                onChange={event => setPrice(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                autoComplete="price"
              />
            </Grid>
          </Grid>
          <Grid item sm={6} md={6}>
          <Paper>
            <Typography style={{ padding: 12}}>Homestay Pictures</Typography>
            <Divider/>
            <Typography style={{ padding: 12}}>Add 2 Pictures</Typography>
            <ImageUploader
                withIcon={false}
                singleImage={true}
                withPreview
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
          </Paper>
          </Grid>
          </Grid>

          <Button
            onClick={onSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Confirm
          </Button>
        </form>
      </div>
    </Container>
  );
}
