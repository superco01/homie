import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Button } from '@material-ui/core';
import axios from 'axios';
import MyTheme from './MyTheme'
import { ThemeProvider } from '@material-ui/styles';
// import { orange, blue } from '@material-ui/core/colors'

const themeHomie = createMuiTheme({
  palette: {
    primary: {
        main: '#FFC107'
    },
    secondary: {
        main: '#26C6DA'
        // '#FFA000'
    },
    // accent: {
    //     main: '#26C6DA'
    // },
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({id: 0, name: ""});
  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('api/owner', {
        headers: {Authorization: `Bearer ${localStorage.usertoken}`}
      })
      setUser(response.data.user);
    }
    fetchUser();
  }, [])
  function handleChange(event) {
    setAuth(event.target.checked);
    console.log(localStorage);
  }
  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  
  return (
    <ThemeProvider theme={themeHomie}>
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="LoginSwitch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar color="primary" position="static" >
        <Toolbar>
          <Typography color="inherit" style={{textDecoration: 'none',}} component={Link} to="/" variant="h5" className={classes.title}>
            HOMIE
          </Typography>
          {auth? (
            <ThemeProvider theme={themeHomie}>
            <div>
              <Button color="secondary" variant="contained" >Welcome {user.name}</Button>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="large"/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to={`/ownerhomestay`} >My Homestay</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={`/addhomestay/${user.id}`} >Add Homestay</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={`/edithomestay/${user.id}`} >Edit Homestay</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={`/roommanagement/${user.id}`} >Check-in / Check-Out</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={`/orderlist/${user.id}`} >Order List</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={`/report/${user.id}`} >Report</MenuItem>
              </Menu>
            </div>
            </ThemeProvider>
          ) : (
              <div>
                  <Button component={Link} to="/register" variant="outlined" color="primary" className={classes.button}>Register</Button>
                  <Button component={Link} to="/login" variant="contained" color="primary" className={classes.button}>Login</Button>
              </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}

export default Header;
