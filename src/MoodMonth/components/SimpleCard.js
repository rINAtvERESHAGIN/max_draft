import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@material-ui/core";
import Boom from "./Boom";
import "./Style.css";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    pos: {
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    but: {
        position:'relative',
        left:'95%',
        transform:'translate(-95%, 0)',
    },

});

export default function SimpleCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const {datNumber} = props;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day {datNumber}
                </Typography>
                <TextField className={classes.pos} size="small" id="outlined-basic" label="" variant="outlined" />
                <TextField className={classes.pos} size="small" id="outlined-basic" label="" variant="outlined" />
                <TextField className={classes.pos} size="small" id="outlined-basic" label="" variant="outlined" />
                <TextField className={classes.pos} size="small" id="outlined-basic" label="" variant="outlined" />
                <TextField className={classes.pos} size="small" id="outlined-basic" label="" variant="outlined" />
            </CardContent>
            <CardActions>
                <Button type="submit" className={classes.but} variant="contained">Save</Button>
            </CardActions>
        </Card>
    );
}
