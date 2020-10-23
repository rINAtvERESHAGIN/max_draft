import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardHeader, IconButton, TextField} from "@material-ui/core";
import Boom from "./Boom";
import "./Style.css";
import {List, ListItem, ListItemText, Divider} from "@material-ui/core";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import styled from 'styled-components';


const useStyles = makeStyles(theme => ({
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
        width: "auto",
        height: "auto",
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    but: {
        position: 'relative',
        left: '95%',
        transform: 'translate(-95%, 0)',
    },

    formTextInput: {
        flexGrow: 1,
        width: "auto",
        height: "auto",
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    },
    list: {
        // width:
    }
}));

const CardHeaderContainer = styled.div`
    display: flex,
`;

export default function SimpleCard(props) {

    const classes = useStyles();
    const {datNumber} = props;
    const [userInput, setUserInput] = useState('');
    const [representation, setRepresentation] = useState(false);

    const textFieldInputs = {
        "waterTextFieldProps": {
            className: classes.pos,
            size: "small",
            id: "outlined-basic",
            label: "water did you drink?",
            variant: "outlined",
            value: userInput,
            onChange: (e) => handleOnchange(e),
        },
        "vitaminsTextFieldProps1": {
            className: classes.pos,
            size: "small",
            id: "outlined-basic",
            label: "vitamins did you take?",
            value: userInput,
            onChange: (e) => handleOnchange(e)
        },
        "vitaminsTextFieldProps2": {
            className: classes.pos,
            size: "small",
            id: "outlined-basic",
            label: "vitamins did you take?",
            value: userInput,
            onChange: (e) => handleOnchange(e)
        },
        "vitaminsTextFieldProps3": {
            className: classes.pos,
            size: "small",
            id: "outlined-basic",
            label: "vitamins did you take?",
            value: userInput,
            onChange: (e) => handleOnchange(e)
        },

    };

    const textFieldCollections = ["waterTextFieldProps", "vitaminsTextFieldProps1", "vitaminsTextFieldProps2", "vitaminsTextFieldProps3",];


    const handleOnClickSwitchView = () => {
        setRepresentation(!representation);
    };

    const handleOnchange = (event) => {
        setUserInput(event.target.value);
    };


    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <CardHeaderContainer>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day {datNumber}
                    </Typography>

                    <IconButton>
                        <PlusOneIcon/>
                    </IconButton>
                </CardHeaderContainer>


                {((representation) => {
                    if (representation === false) {
                        return (
                            textFieldCollections.map((textFieldId, index) => (
                                <form key={index} className={classes.formTextInput} noValidate autoComplete="off">
                                    <TextField key={index} {...textFieldInputs[textFieldId]}/>
                                </form>
                            ))
                        );
                    } else if (representation === true) {
                        return (
                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                                <ListItem button>
                                    <ListItemText primary={userInput}/>
                                </ListItem>
                            </List>
                        );
                    }
                })(representation)}

            </CardContent>

            <CardActions>
                {((representation) => {
                    if (representation === false) {
                        return (<Button className={classes.but}
                                        variant="contained"
                                        onClick={handleOnClickSwitchView}

                        >Save</Button>);
                    } else if (representation === true) {
                        return (<Button className={classes.but}
                                        variant="contained"
                                        onClick={handleOnClickSwitchView}

                        >Edit</Button>)
                    }
                })(representation)}
            </CardActions>
        </Card>
    );
}
