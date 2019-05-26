import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const HomestayList = (props) => {
    return (
        <div>
            {props.homestay ? (
                <Card>
                    <CardMedia
                    style={{height: 0, paddingTop: '56.25%'}}
                    image=""
                    title={props.homestay.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="caption" component="header">
                            {props.homestay.id}
                        </Typography>
                        <Typography component="p">
                            {props.homestay.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/homestay/${props.homestay.id}`}>
                            Select Homestay
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default HomestayList