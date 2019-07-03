import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
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
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
// import { orange, blue } from '@material-ui/core/colors'

const themeHomie = createMuiTheme({
  palette: {
    primary: {
        main: '#FFC107'
    },
    secondary: {
        main: '#FFA000'
        // main: '#26C6DA'
    },
    // accent: {
    //     main: '#26C6DA'
    // },
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#FFC107',
  },
  content: {
    marginLeft: theme.spacing(2),
    background: '#FFA000'
  },
  button: {
    marginLeft: theme.spacing(2),
    background: '#26C6DA'
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({id: 0, name: ""});
  const open = Boolean(anchorEl);

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem('user')))
    // console.log("----------------------------------");
    
    // const fetchUser = async () => {
    //   const response = await axios.get('api/owner', {
    //     headers: {Authorization: `Bearer ${localStorage.usertoken}`}
    //   })
    //   setUser(response.data.user);
    // }
    // fetchUser();
  }, [])
  function handleChange(event) {
    setAuth('admin');
    console.log(localStorage);
  }
  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  function logout() {
    axios.get('/api/logout', { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')} })
    .then((response) => {
      localStorage.setItem('usertoken', '0')
      localStorage.setItem('user', '0')
      console.log(response);
      this.setState(this.state)
    })
    .catch((error) => {
      console.log(error);
      localStorage.setItem('usertoken', '0')
      localStorage.setItem('user', '0')
    })
    .then( () => {
      props.history.push(`/`);
    })
  }
  
  return (
    
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="LoginSwitch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar className={classes.root} position="static" >
        <Toolbar>
          <Typography color="inherit" style={{textDecoration: 'none',}} component={Link} to="/" variant="h5" className={classes.title}>
            HOMIE
          </Typography>
          {localStorage.getItem('usertoken') != '0'? (
            <div>
            {JSON.parse(localStorage.getItem('user')).name == 'admin'? (
            <div>
              <Button color="default" variant="text" >Welcome Admin</Button>
              <Button onClick={logout} style={{ marginRight: 5, marginLeft: 5}} color="secondary" variant="contained" >Logout</Button>
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
                <MenuItem onClick={handleClose} component={Link} to={`/admowner`} >Owner List</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={`/admhomestay`} >Homestay List</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={`/admorder`} >Order List</MenuItem>
              </Menu>
            </div>
            ) : (
            <div>
              <Button color="default" variant="text" >Welcome {user.name}</Button>
              <Button onClick={logout} style={{ marginRight: 5, marginLeft: 5}} color="secondary" variant="contained" >Logout</Button>
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
            )}
            </div>
          ) : (
              <div>
                  <Button component={Link} to="/register" variant="text" className={classes.content}>Register</Button>
                  <Button component={Link} to="/login" variant="text" className={classes.content}>Login</Button>
              </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
