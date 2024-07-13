import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addHabit } from '../actions/habitActions';
import { NONE } from '../constants/habitStatus';
import { useNavigate } from 'react-router-dom';
import { format, subDays } from 'date-fns';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    width: '600px',
  },
  title: {
    fontSize: '2rem',
  },
  container: {
    padding: '20px',
  },
});

const AddHabits = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
    if (title && details) {
      const habit = {
        title,
        description: details,
        consistency: weekDates.map((date) => ({
          day: date,
          status: NONE,
        })),
      };
      dispatch(addHabit(habit));
      navigate('/');
    }
  };

  const classes = useStyles();

  const [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    const dates = Array.from({ length: 7 }).map((_, index) =>
      format(subDays(today, 6 - index), 'EEEE, dd-MM-yyyy')
    );
    setWeekDates(dates);
  }, []);

  return (
    <Container size="sm" className={classes.container}>
      <Typography
        variant="h6"
        color="textPrimary"
        gutterBottom
        className={classes.title}
      >
        Create a new Habit
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        <TextField
          className={classes.field}
          variant="outlined"
          label="Habit Title"
          color="primary"
          required
          error={titleError}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          className={classes.field}
          variant="outlined"
          label="Habit Description"
          color="primary"
          fullWidth
          rows={3}
          required
          error={detailsError}
          onChange={(event) => setDetails(event.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddHabits;
