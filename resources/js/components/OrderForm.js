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
import { Paper } from '@material-ui/core';

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


export default function OrderForm(props) {
  const classes = useStyles();

  const [room, setRoom] = React.useState([])
  const [name, setName] = React.useState('')
  const [guestName, setGuestName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [checkInDate, setCheckInDate] = React.useState('')
  const [duration, setDuration] = React.useState('')
  const [checkOutDate, setCheckOutDate] = React.useState('')
  
  useEffect(() => {
    const fetchRoom = async () => {
      const response = await axios.get(`api/room/${props.match.params.id}`)
      setRoom(response.data);
      setCheckInDate(props.match.params.checkin)
      setDuration(props.match.params.duration)
      console.log(duration);
      console.log(checkInDate);
    }
    fetchRoom();
  }, [])

  function onSubmit(e) {
      e.preventDefault()

      const newOrder = {
          name: name,
          guest: guestName,
          email: email,
          phone_number: phoneNumber,
          room_id: room.id,
          room_number: room.room_number,
          homestay_id: room.homestay_id,
          checkin_date: checkInDate,
          duration: duration,
      }
      console.log(room);
      console.log(newOrder);
      
      axios.post('api/order', newOrder, {
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        console.log('Order Response');
        console.log(response);
        return response.data;
      })
      .then( (data) => {
        props.history.push(`/payment/${data.id}`);
      })
      .catch(error => {
        alert('Field should not empty')
        console.log(error);
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Paper style={{ padding: 25}}>
        <Typography component="h1" variant="h5">
          Order Form
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
                value={guestName}
                onChange={event => setGuestName(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="guestName"
                label="Guest Name"
                name="guestName"
                autoComplete="gname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={event => setEmail(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={phoneNumber}
                onChange={event => setPhoneNumber(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="pnumber"
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
            // component = {Link}
            // to = {`/payment/`}
          >
            Confirm
          </Button>
        </form>
        </Paper>
      </div>
    </Container>
  );
}
