import React, { Component } from 'react'
import {Divider, ButtonBase, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Paper, withStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format';

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

class EditRooms extends Component {
    constructor() {
        super()
        this.state = {
            homestay: [],
            roomCount: 0,
            rooms: [],
            errors: [],
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(room) {
      console.log(room);
      const homestayId= this.props.match.params.id
      
      if(confirm('Are you sure to set room availability?')) {
        axios.post('api/roomStatus', room, { headers: {'Authorization': "Bearer "+localStorage.getItem('usertoken')} })
        .then(response => {
          console.log(response);

          axios.get(`api/roomOwner/${homestayId}`)
          .then(response => {
          console.log("roomlist");
          console.log(response.data);
          
          this.setState({ rooms: response.data.ownerRoom });
        })
        })
      }
    }

    componentDidMount() {
        const homestayId= this.props.match.params.id
        
        axios.get(`api/roomOwner/${homestayId}`)
        .then(response => {
          console.log("roomlist");
          console.log(response.data);
          
          this.setState({ rooms: response.data.ownerRoom });
        })
    }

    render() {
        return (
          <div>
          <Container style={{paddingTop: 50, paddingBottom: 100, paddingLeft: 120, paddingRight: 120}}>
            {/* {this.state.homestay ? ( */}
              <Container>
                {/* <Container spacing={3} style={{paddingBottom: 25}}>
                  <Card spacing={3}>
                    <CardMedia
                      style={{height: 0, paddingTop: '56.25%'}}
                      image="/images/evelyn-paris-96422-unsplash.jpg"
                      title={this.state.homestay.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="caption" component="header">
                          {this.state.homestay.name}
                      </Typography>
                      <Typography component="p">
                          Facilities : {this.state.homestay.facilities}
                      </Typography>
                      <Typography component="p">
                          Total Rooms : {this.state.roomCount} from {this.state.homestay.number_of_rooms}
                      </Typography>
                    </CardContent>
                  </Card>
                </Container> */}
                {/* <Divider variant="fullWidth"/> */}
                {/* <Container spacing={2}> */}
                { this.state.rooms.map(room =>(
                  <Container key={room.id}  style={{paddingTop: 15, paddingBottom: 15}}>
                    {/* <Paper> */}
                    <Divider/>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase style={{ width: 128 , height: 128 }}>
                            <img style={{ margin: 1, display: 'block', maxWidth: '100%', maxHeight: '100%' }} alt="complex" src={room.photos}/>
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography variant="h6" >
                                Room Number: {room.room_number}
                              </Typography>
                            </Grid>
                            <Divider/>
                            <Grid item xs>
                              <Typography variant="body1">
                                Room Type: {room.type}
                              </Typography>
                              <Typography variant="body1">
                                {room.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={2} container>
                          <Grid item >
                            <Grid item xs={12}>
                              <Typography variant="h6">
                                <NumberFormat value={room.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} suffix={',-'} />
                              </Typography>
                            </Grid>
                            {/* <Grid item xs={12}> */}
                              <Button
                              
                              style={{padding: 20, marginTop: 30}}
                              className={this.props.classes.button} 
                              variant="contained"
                              component={Link} 
                              to={`/editroom/${room.id}`}
                              >
                                Edit Room
                              </Button>
                            {/* </Grid> */}
                          </Grid>
                        </Grid>
                        <Grid item md={2} container>
                          <Grid item xs={12} >
                            <Grid item xs={12}>
                              <Typography variant="h6">
                                Room Status: {room.room_availability == 0? 'Closed':'Opened'}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Button
                              // className={this.props.classes.button}
                              color="secondary"
                              variant="contained"
                              onClick={()=>this.onSubmit(room)}
                              >
                                {room.room_availability == 0? 'Open':'Close'} Room
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider/>
                    {/* </Paper> */}
                  </Container>
                )) }
                {/* </Container> */}
                </Container>
                {/* ) : <Paper>Not Found</Paper>} */}
            </Container>
            </div>
        )
    }
}

export default withStyles(styles)(EditRooms);
















// import React from 'react';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// function desc(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function stableSort(array, cmp) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = cmp(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map(el => el[0]);
// }

// function getSorting(order, orderBy) {
//   return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
// }

// const headRows = [
//   { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
//   { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
//   { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
//   { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
//   { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = property => event => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'Select all desserts' }}
//           />
//         </TableCell>
//         {headRows.map(row => (
//           <TableCell
//             key={row.id}
//             align={row.numeric ? 'right' : 'left'}
//             padding={row.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === row.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === row.id}
//               direction={order}
//               onClick={createSortHandler(row.id)}
//             >
//               {row.label}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.string.isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles(theme => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   spacer: {
//     flex: '1 1 100%',
//   },
//   actions: {
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// }));

// const EnhancedTableToolbar = props => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       <div className={classes.title}>
//         {numSelected > 0 ? (
//           <Typography color="inherit" variant="subtitle1">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography variant="h6" id="tableTitle">
//             Nutrition
//           </Typography>
//         )}
//       </div>
//       <div className={classes.spacer} />
//       <div className={classes.actions}>
//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="Delete">
//               <DeleteIcon />
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <Tooltip title="Filter list">
//             <IconButton aria-label="Filter list">
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         )}
//       </div>
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   tableWrapper: {
//     overflowX: 'auto',
//   },
// }));

// export default function EnhancedTable() {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   function handleRequestSort(event, property) {
//     const isDesc = orderBy === property && order === 'desc';
//     setOrder(isDesc ? 'asc' : 'desc');
//     setOrderBy(property);
//   }

//   function handleSelectAllClick(event) {
//     if (event.target.checked) {
//       const newSelecteds = rows.map(n => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   }

//   function handleClick(event, name) {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   }

//   function handleChangePage(event, newPage) {
//     setPage(newPage);
//   }

//   function handleChangeRowsPerPage(event) {
//     setRowsPerPage(+event.target.value);
//   }

//   function handleChangeDense(event) {
//     setDense(event.target.checked);
//   }

//   const isSelected = name => selected.indexOf(name) !== -1;

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <div className={classes.tableWrapper}>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getSorting(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={event => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isItemSelected}
//                           inputProps={{ 'aria-labelledby': labelId }}
//                         />
//                       </TableCell>
//                       <TableCell component="th" id={labelId} scope="row" padding="none">
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.calories}</TableCell>
//                       <TableCell align="right">{row.fat}</TableCell>
//                       <TableCell align="right">{row.carbs}</TableCell>
//                       <TableCell align="right">{row.protein}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 49 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           backIconButtonProps={{
//             'aria-label': 'Previous Page',
//           }}
//           nextIconButtonProps={{
//             'aria-label': 'Next Page',
//           }}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </div>
//   );
// }
