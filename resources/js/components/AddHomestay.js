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

  const [name, setName] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [facilities, setFacilities] = React.useState('')
  const [numberOfRooms, setNumberOfRooms] = React.useState('')

  const [type, setType] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [photos, setPhotos] = React.useState('')
  const [price, setPrice] = React.useState('')
  
  useEffect(() => {
    const fetchRoom = async () => {
      const response = await axios.get(`api/room/${props.match.params.id}`)
      setRoom(response.data);
      console.log(response);
    }
    fetchRoom();
  }, [])

  function onSubmit(e) {
      e.preventDefault()
      const userId = props.match.params.id  
      
      const addNewHomestay = {
        user_id: userId,
        name: name,
        location: location,
        address: address,
        facilities: facilities,
        number_of_rooms: numberOfRooms,
      }

      axios.post(`/api/homestay`, addNewHomestay, {
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        const data = response.data;
        const addNewRoom = {
            homestay_id: data.id,
            type: type,
            description: description,
            photos: photos,
            price: price,
            room_availability: 0
          }

        axios.post(`/api/room`, addNewRoom)
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Add Homestay
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
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
            <Grid item xs={12}>
              <TextField
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
            </Grid>
            <Grid item xs={12}>
              <TextField
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
            <Grid item xs={12}>
              <TextField
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
            <Grid item xs={12}>
              <TextField
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
            <Grid item xs={12}>
              <TextField
                value={type}
                onChange={event => setType(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="type"
                label="Type"
                name="type"
                autoComplete="type"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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
            <Grid item xs={12}>
              <TextField
                value={photos}
                onChange={event => setPhotos(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="photos"
                label="Photos"
                name="photos"
                autoComplete="photos"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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
