import React, { useState, useEffect, useRef } from "react";
import { 
    Container, TextField, InputLabel, 
    Select, FormControl, Chip, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import CssBaseline from '@material-ui/core/CssBaseline';
import {NavBar} from '../components/NavBar'
import {CopyRight} from '../components/CopyRight'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    chip: {
        margin: theme.spacing(1),
    },
    addTag: {
        margin: theme.spacing(1),
        padding: theme.spacing(2)
    },
    submit:{
        margin: theme.spacing(2,0)
    }
  }));
export const CreateMeetup = (props) => {
    const classes = useStyles();
    const [state, setState] = useState({
        age: '',
        name: 'hai',
    });
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
        console.log(event.target.value, "=====")
        setState({
        ...state,
        [name]: event.target.value,
        });
    };
    const handleDelete = () => {
        alert('You clicked the Chip.');
      };
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <NavBar/>
                <Container maxWidth="sm">
                    <h1>Basic Information</h1>
                    <p>
                    Name your meet-up and tell meet-up-goers why they should come. Add details that highlight what makes it unique.
                    </p>
                    <TextField
                        label="Meet-Up Title"
                        style={{ margin: 8 }}
                        placeholder="Be clear and descriptive"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                        Type
                        </InputLabel>
                        <Select
                        native
                        value={state.age}
                        onChange={handleChange('age')}
                        labelWidth={labelWidth}
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option value=""></option>
                        <option value="APPEARANCE_OR_SIGNING">Appearance or Signing</option>
                        <option value="ATTRACTION">Attraction</option>
                        <option value="CAMP_TRIP_RETREAT">Camp, Trip, or Retreat</option>
                        <option value="CLASS_TRAINING_WORKSHOP">Class, Training, or Workshop</option>
                        <option value="CONCERT_OR_PERFORMANCE">Concert or Performance</option>
                        <option value="CONFERENCE">Conference</option>
                        <option value="CONVENTION">Convention</option>
                        <option value="DINNER_OR_GALA">Dinner or Gala</option>
                        <option value="FESTIVAL_OR_FAIR">Festival or Fair</option>
                        <option value="GAME_OR_COMPETITION">Game or Competition</option>
                        <option value="MEETING_OR_NETWORKING_EVENT">Meeting or Networking Event</option>
                        <option value="PARTY_OR_SOCIAL_GATHERING">Party or Social Gathering</option>
                        <option value="RACE_OR_ENDURANCE_EVENT">Race or Endurance Event</option>
                        <option value="RALLY">Rally</option>
                        <option value="SCREENING">Screening</option>
                        <option value="SEMINAR_OR_TALK">Seminar or Talk</option>
                        <option value="TOUR">Tour</option>
                        <option value="TOURNAMENT">Tournament</option>
                        <option value="TRADESHOW_CONSUMERSHOW_EXPO">Tradeshow, Consumer Show, or Expo</option>
                        <option value="100">Other</option>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <TextField
                                label="Enter tags"
                                style={{ margin: 8 }}
                                placeholder="Add keywords to your meet-up"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                id="sign-up"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.addTag}>
                                Add Tag
                            </Button>
                        </Grid>
                    </Grid>
                    <Chip
                        variant="outlined"
                        size="small"
                        label="Tech"
                        onDelete={handleDelete}
                        className={classes.chip}
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="small"
                        label="Science"
                        onDelete={handleDelete}
                        className={classes.chip}
                        color="primary"
                    />
                    <TextField
                        label="Organizer"
                        style={{ margin: 8 }}
                        placeholder="Tell the attendees who is organizing this meet-up"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <h1>Location</h1>
                    <p>
                    Help people in the area discover your meet-up and let attendees know where to show up.
                    </p>
                    <TextField
                        label="Location"
                        style={{ margin: 8 }}
                        placeholder="Where your meet-up will take place"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <h1>Date and time</h1>
                    <p>
                    Tell meet-up-goers when your meet-up starts and ends so they can make plans to attend.
                    </p>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                        <DateTimePicker
                            label="Start"
                            inputVariant="outlined"
                            fullWidth
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        </Grid>
                        <Grid item xs={6}>
                        <DateTimePicker
                            label="End"
                            inputVariant="outlined"
                            fullWidth
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        </Grid>
                    </Grid>
                    </MuiPickersUtilsProvider>
                    <Button
                        id="sign-up"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create
                    </Button>
                </Container>
                <CopyRight/>
            </React.Fragment>
        </div>
    )
}

export default CreateMeetup