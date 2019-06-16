import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="LoginSwitch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography color="inherit" style={{textDecoration: 'none',}} component={Link} to="/" variant="h5" className={classes.title}>
            HOMIE
          </Typography>
          {auth? (
            <div>
              <Button  color="inherit">Welcome {user.name}</Button>
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
              </Menu>
            </div>
          ) : (
              <div>
                  <Button component={Link} to="/register" variant="outlined" color="primary" className={classes.button}>Register</Button>
                  <Button component={Link} to="/login" variant="contained" color="primary" className={classes.button}>Login</Button>
              </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
