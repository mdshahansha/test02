import React from 'react';
import { Container, Divider, makeStyles, Typography } from '@material-ui/core';

import HabitDetails from './HabitDetails';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
  },
});

const HabitComponent = ({ habit }) => {
  const classes = useStyles();
  return (
    <>
      <Typography>
        {habit.title}: {habit.description}
      </Typography>
      <Container className={classes.container}>
        {habit.consistency.map((element) => {
          return (
            <HabitDetails
              element={element}
              key={element.day}
              day={element.day}
              title={habit.title}
            />
          );
        })}
      </Container>
      <Divider />
    </>
  );
};

export default HabitComponent;
