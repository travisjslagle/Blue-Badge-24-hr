import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import APIData from '../api-data/APIData';
import UserLocation from '../map/Location';
// import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

// const Row = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     width: 100%;
// `;

// const Column = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex: 1;
// `;

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
        <UserLocation />
        {/* <Row>
            <Column> */}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://storage.needpix.com/rsynced_images/indianapolis-1872529_1280.jpg"
                        title="Indianapolis"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Indianapolis Location API
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Look at our beautiful city, Indianapolis. Click the button below to see the API from NASA!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        NASA Location API
                        </Button>
                    </CardActions>
                </Card>
            {/* </Column>
            <Column> */}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://indianapublicmedia.org/wpimages/news/2014/06/radar.jpg"
                        title="Weathermap"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Weathermap API
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Click the button below to open the Weathermap for your location!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Weathermap API
                        </Button>
                    </CardActions>
                </Card>
            {/* </Column>
            <Column> */}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://static.asianetnews.com/images/f2090986-d306-4e61-8232-328b6e03ef1b/image_710x400xt.jpg"
                        title="Zomato"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Zomato API
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Click the button below to see the API from Zomato!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Zomato API
                        </Button>
                    </CardActions>
                </Card>
                <APIData />
            {/* </Column>
        </Row> */}
    </div>
  );
}