import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { Divider, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 2,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  // {
  //   title: 'Free',
  //   price: '0',
  //   description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
  //   buttonText: 'Sign up for free',
  //   buttonVariant: 'outlined',
  // },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  // {
  //   title: 'Enterprise',
  //   price: '30',
  //   description: [
  //     '50 users included',
  //     '30 GB of storage',
  //     'Help center access',
  //     'Phone & email support',
  //   ],
  //   buttonText: 'Contact us',
  //   buttonVariant: 'outlined',
  // },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Payment(props) {
  const classes = useStyles();
  const [homestayName, setHomestayName] = React.useState('')
  const [homestayAddress, setHomestayAddress] = React.useState('')

  const [orderId, setOrderId] = React.useState('')
  const [grossAmount, setGrossAmount] = React.useState(0)
  const [roomId, setRoomId] = React.useState('')
  const [homestayId, setHomestayId] = React.useState('')
  const [name, setName] = React.useState('')
  const [guestName, setGuestName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [checkInDate, setCheckInDate] = React.useState('')
  const [duration, setDuration] = React.useState('')
  const [checkOutDate, setCheckOutDate] = React.useState('')
  const [priceTotal, setPriceTotal] = React.useState(0)
  const [responseData, setResponseData] = React.useState({})

  const [snapPayResult, setSnapPayResult] = React.useState({})
  
  useEffect(() => {
    const fetchOrder = async () => {
      const response = await axios.get(`api/order/${props.match.params.id}`)
      console.log(response.data);
      setResponseData(response.data)
      setHomestayName(response.data.homestay.name)
      setHomestayAddress(response.data.homestay.address)
      
      setOrderId(response.data.order.id)
      setGrossAmount(response.data.order.phone_number)
      setHomestayId(response.data.order.homestay_id)
      setName(response.data.order.name)
      setGuestName(response.data.order.guest)
      setEmail(response.data.order.email)
      setPhoneNumber(response.data.order.phone_number)
      setCheckInDate(response.data.order.checkin_date)
      setDuration(response.data.order.duration)
      setCheckOutDate(response.data.order.checkout_date)
      setPriceTotal(response.data.order.price_total)
    }
    fetchOrder();
  }, [])

  function updateOrderStatus(result) {
    console.log('update status order');
    
    console.log(snapPayResult);
    console.log(result);
    
    axios.post('api/orderUpdate', result)
  }

  function onPay(e) {
    e.preventDefault()
    
    axios.post('api/snaptoken', responseData,{
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'U0ItTWlkLXNlcnZlci1NaElqUXdfUGtEQkdJeG5mOW1uMlhISVE6' }
    })
    .then((response) => {
      console.log(response);
      // token = response.data
      window.snap.pay(response.data, {
        onSuccess: function(result){console.log('success');console.log(result);setSnapPayResult(result);updateOrderStatus(result);props.history.push('/');},
        onPending: function(result){console.log('pending');console.log(result);setSnapPayResult(result);updateOrderStatus(result);props.history.push('/');},
        onError: function(result){console.log('error');console.log(result);setSnapPayResult(result);},
        onClose: function(){console.log('customer closed the popup without finishing the payment');},
      })
    })
    // .then(() => {
    //   if (snapPayResult.transaction_status == 'pending' || snapPayResult.transaction_status == 'capture') {
    //     props.history.push('/');
    //   }
    // })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container  className={classes.heroContent}>
        <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
          Booking Details
        </Typography>
      </Container>
      <Container >
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardHeader
                title={homestayName}
                subheader={homestayAddress}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <Divider/>
                <Typography style={{fontSize:15}} component="li" variant="button" align="center">
                  Check-in at {checkInDate}
                </Typography>
                <Typography style={{fontSize:15}} component="li" variant="button" align="center">
                  {duration} night
                </Typography>
                <Typography style={{fontSize:15}} component="li" variant="button" align="center">
                  Check-out at {checkOutDate}
                </Typography>
                <Divider/>
                <Typography style={{fontSize:15}} component="li" variant="caption" align="center">
                  Booked by {name}
                </Typography>
                <Typography style={{fontSize:15}} component="li" variant="caption" align="center">
                  Guest Name : {guestName}
                </Typography>
                <Typography style={{fontSize:15}} component="li" variant="caption" align="center">
                  Email : {email}
                </Typography>
                <Typography style={{fontSize:15}} component="li" variant="caption" align="center">
                  Phone Number : {phoneNumber}
                </Typography>
                <Divider/>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h4" color="textPrimary">
                    Rp. {priceTotal},-
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button onClick={onPay} fullWidth variant="contained" color="primary">
                  Pay
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}