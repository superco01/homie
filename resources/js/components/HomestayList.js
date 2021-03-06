import React, { useEffect } from 'react'
import {Grid, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import MyTheme from './MyTheme'
import NumberFormat from 'react-number-format';

function HomestayList(props) {
  // const {styles} = this.props
  console.log(props);
  console.log("-----------------------------");
  const [room, setRoom] = React.useState([])
  var lowestPrice = 0;
  return (
    <div>
      <Paper>
        <Grid justify="space-between" container style={{ marginLeft: 20, marginRight: 20 }} spacing={2}>
          <Grid item>
            <ButtonBase style={{ width: 128 , height: 128 }}>
              <img style={{ margin: 1, display: 'block', maxWidth: '100%', maxHeight: '100%' }} alt="complex" src={props.homestay.photo1}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6">
                  {props.homestay.name}
                </Typography>
              </Grid>
              <Divider/>
              <Grid item xs>
                <Typography variant="body1">
                  Homestay Description: {props.homestay.description}
                </Typography>
                <Typography variant="body1">
                  Address: {props.homestay.address}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item>
              <Grid item>
              {props.homestay.rooms.map(room => {
                if (room.room_availability == 1) {
                  if (lowestPrice == 0) {
                    lowestPrice = room.price
                  }
                  if (lowestPrice > room.price) {
                    lowestPrice = room.price
                  }
                }
              })}
                <Typography display="inline" variant="h6">
                  Lowest Price
                </Typography>
                <Typography variant="h6">
                  {lowestPrice == 0? "-": <NumberFormat value={lowestPrice} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} suffix={',-'} />}
                </Typography>
              </Grid>
              <Grid item>
              {/* <ThemeProvider theme={MyTheme}> */}
                <Button
                className={props.className.button} 
                variant="contained" 
                component={Link} 
                to={`/homestay/${props.homestay.id}/${props.checkinDate}/${props.duration}`}>
                  Select Homestay
                </Button>
                {/* </ThemeProvider> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default (HomestayList);
// const HomestayList = (props) => {
  
//   return (
//     <div>
//       <Paper>
//         <Grid container style={{ marginLeft: 20, marginRight: 20 }} spacing={2}>
//           <Grid item>
//             <ButtonBase style={{ width: 128 , height: 128 }}>
//                 <img style={{ margin: 1, display: 'block', maxWidth: '100%', maxHeight: '100%' }} alt="complex" src="/images/evelyn-paris-96422-unsplash.jpg"/>
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography variant="h6">
//                   {props.homestay.name}
//                 </Typography>
//               </Grid>
//               <Divider/>
//               <Grid item xs>
//                 <Typography variant="body1">
//                   {props.homestay.address}
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs >
//               <Grid item xs>
//                 <Typography variant="h6">
//                   {this.state.lowestPrice}
//                 </Typography>
//               </Grid>
//               <Grid item xs>
//                 <Button component={Link} to={`/homestay/${props.homestay.id}`}>
//                   Select Homestay
//                 </Button>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   )
// }


{/* <div>
            {props.homestay ? (
                <Card>
                    <CardMedia
                    style={{height: 0, paddingTop: '56.25%'}}
                    image="/images/evelyn-paris-96422-unsplash.jpg"
                    title={props.homestay.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="header">
                            {props.homestay.name}
                        </Typography>
                        <Typography component="p">
                            {props.homestay.address}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/homestay/${props.homestay.id}`}>
                            Select Homestay
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div> */}