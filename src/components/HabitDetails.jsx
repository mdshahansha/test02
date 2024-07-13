import React, { useState } from 'react';
import { Typography, makeStyles, Card, CardContent } from '@material-ui/core';
import { Done, Cancel, HourglassEmptyOutlined } from '@material-ui/icons';
import { DONE, NONE, NOT_DONE } from '../constants/habitStatus';
import { updateStatus } from '../actions/habitActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  card: {
    margin: '10px',
    padding: '10px',
    width: '120px',
    textAlign: 'center',
  },
  statusBox: {
    height: '20px',
    width: '20px',
    margin: '10px auto',
    cursor: 'pointer',
  },
  date:{
    fontSize: '0.7rem',
  }
});

const HabitDetails = ({ element, day, title }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [status, setStatus] = useState(element.status);

  const onClickStatusChange = () => {
    if (element.status === DONE) {
      setStatus(NOT_DONE);
    } else if (element.status === NOT_DONE) {
      setStatus(NONE);
    } else {
      setStatus(DONE);
    }
    dispatch(updateStatus(element.status, day, title));
  };

  const [dayName, date] = day.split(', ');

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body1">{dayName}</Typography>
        <Typography variant="body2" className={classes.date}>{date}</Typography>
        <div className={classes.statusBox} onClick={() => onClickStatusChange()}>
          {status === DONE ? <Done /> : null}
          {status === NOT_DONE ? <Cancel /> : null}
          {status === NONE ? <HourglassEmptyOutlined /> : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitDetails;
