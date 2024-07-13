import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import HabitComponent from '../components/HabitComponent';

const Habits = () => {
  const habits = useSelector((state) => state.habits);
  // console.log(habits);
  return (
    <Container style={{ padding: '10px' }}>
      {habits.map((habit) => (
        <HabitComponent habit={habit} key={habit.title} />
      ))}
    </Container>
  );
};

export default Habits;
