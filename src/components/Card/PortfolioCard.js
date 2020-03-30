import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundColor: "#456e82",
    },
    media: {
        width: "90%",
        height: "auto",
    },
    detail: {
        textAlign: 'left',
        color: "white"
      },
      main: {
        textAlign: 'center',
        color: "white"
      },
});

export default function PortfolioCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
            <img src={props.image} alt={props.title} className={classes.media} />
                {/* <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.main}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.detail}>
                        {props.details}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}
