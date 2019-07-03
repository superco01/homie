import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
  },
  main: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(2),
    backgroundColor: '#FFC107',
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div color="primary" className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="xl">
        <Typography color="textSecondary" align="right" variant="h3" component="h1" gutterBottom>
          HOMIE
        </Typography>
        <Typography color="textSecondary" align="right" variant="h6" component="h2" gutterBottom>
          {/* {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'} */}
          Contact Us : homie.cs@homie.com
        </Typography>
        <Typography variant="body1">About Us:</Typography>
        <Typography variant="body1">Order Homestay</Typography>
        <Typography variant="body1">Payment</Typography>
        <Typography variant="body1">Register as Homestay Owner</Typography>
        <Typography variant="body1">Terms & Conditions</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography align="center" variant="body1">Copyright © 2019 Homie Indonesia</Typography>
        </Container>
      </footer>
    </div>
  );
}