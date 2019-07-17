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
import { Paper, Divider } from '@material-ui/core';
import ImageUploader from 'react-images-upload';

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

export default function EditHomestay(props) {
  
  const [pictures, setPictures] = React.useState([])
  const classes = useStyles();
  
  const [name, setName] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [facilities, setFacilities] = React.useState('')
  const [numberOfRooms, setNumberOfRooms] = React.useState('')
  
  const [type, setType] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [photo1, setPhoto1] = React.useState('')
  const [photo2, setPhoto2] = React.useState('')
  const [price, setPrice] = React.useState('')
  
  useEffect(() => {
    const fetchRoom = async () => {
      const response = await axios.get(`api/homestay/${JSON.parse(localStorage.getItem('id'))}`)
      .then((response) => {
        return response.data
      })
      console.log(response);
      setName(response.name);
      setLocation(response.location)
      setAddress(response.address)
      setFacilities(response.facilities)
      setNumberOfRooms(response.number_of_rooms)
      setPhoto1(response.photo1)
      setPhoto2(response.photo2)
      // setPictures(pictures.concat(response.photo1));
      // setPictures(pictures.concat(response.photo2));
      // setPictures(pictures.concat(response.photo1))
      // setPictures(pictures.concat("response.photo2"))
      // setPictures([...pictures, 'response.photo2'])
    }
    fetchRoom();
  }, [])
  
  function onDrop(picture) {
    setPictures(pictures.concat(picture.name));
    console.log(pictures);
  }

  function onSubmit(e) {
      e.preventDefault()
      const userId = JSON.parse(localStorage.getItem('id'))
      console.log('---------------------');
      console.log(pictures);
      console.log('---------------------');
      
      if (pictures != null) {
        setPhoto1(pictures[0])
        setPhoto1(pictures[1])
      }
      
      const editHomestay = {
        user_id: userId,
        name: name,
        // location: location,
        // address: address,
        facilities: facilities,
        photo1: photo1,
        photo2: photo2,
        number_of_rooms: numberOfRooms,
      }
      console.log(editHomestay);
      

      axios.post(`api/homestayUpdate`, editHomestay, {
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        const data = response.data;
        console.log(response);
        
        // const addNewRoom = {
        //     homestay_id: data.id,
        //     type: type,
        //     description: description,
        //     photos: photos,
        //     price: price,
        //     room_availability: 0
        //   }
        // axios.post(`/api/room`, addNewRoom)
        // console.log(response);
      }).catch(error => {
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
          Edit Homestay
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
            <Grid item  >
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
            <Typography style={{ padding: 12}}>Max 2 Pictures</Typography>
            <ImageUploader
                withIcon={false}
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













    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <div className={classes.paper}>
    //     {/* <Avatar className={classes.avatar}>
    //       <LockOutlinedIcon />
    //     </Avatar> */}
    //     <Typography component="h1" variant="h5">
    //       Edit Homestay
    //     </Typography>
    //     <form className={classes.form} noValidate>
    //       <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <TextField
    //             // disabled
    //             value={name}
    //             onChange={event => setName(event.target.value)}
    //             autoComplete="name"
    //             name="name"
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="name"
    //             label="Name"
    //             autoFocus
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             disabled
    //             value={location}
    //             onChange={event => setLocation(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="location"
    //             label="Location"
    //             name="location"
    //             autoComplete="location"
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             disabled
    //             value={address}
    //             onChange={event => setAddress(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="address"
    //             label="Address"
    //             name="address"
    //             autoComplete="address"
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             value={facilities}
    //             onChange={event => setFacilities(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="facilities"
    //             label="Facilities"
    //             name="facilities"
    //             autoComplete="facilities"
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             disabled
    //             value={numberOfRooms}
    //             onChange={event => setNumberOfRooms(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="numberOfRooms"
    //             label="Number of Rooms"
    //             name="numberOfRooms"
    //             autoComplete="numberOfRooms"
    //           />
    //         </Grid>
    //         {/* <Grid item xs={12}>
    //           <TextField
    //             value={type}
    //             onChange={event => setType(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="type"
    //             label="Type"
    //             name="type"
    //             autoComplete="type"
    //           />
    //         </Grid> */}
    //         <Grid item xs={12}>
    //           <TextField
    //             value={description}
    //             onChange={event => setDescription(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="description"
    //             label="Description"
    //             name="description"
    //             autoComplete="description"
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             value={photo1}
    //             onChange={event => setPhotos(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="photo1"
    //             label="Photo 1"
    //             name="photo1"
    //             autoComplete="photo1"
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             value={photo2}
    //             onChange={event => setPhotos(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="photo2"
    //             label="Photo 2"
    //             name="photo2"
    //             autoComplete="photo2"
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             value={price}
    //             onChange={event => setPrice(event.target.value)}
    //             variant="outlined"
    //             required
    //             fullWidth
    //             id="price"
    //             label="Price"
    //             name="price"
    //             autoComplete="price"
    //           />
    //         </Grid>
    //       </Grid>
    //       <Button
    //         onClick={onSubmit}
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         color="primary"
    //         className={classes.submit}
    //       >
    //         Confirm
    //       </Button>
    //     </form>
    //   </div>
    // </Container>
  );
}
