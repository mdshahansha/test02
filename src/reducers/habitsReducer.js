import { ADD_HABIT, UPDATE_HABIT_STATUS } from '../constants/actionTypes';
import { DONE, NOT_DONE, NONE } from '../constants/habitStatus';
import { format, subDays } from 'date-fns';

const today = new Date();
const dates = Array.from({ length: 7 }).map((_, index) =>
  format(subDays(today, 6 - index), 'EEEE, dd-MM-yyyy')
);

const initialState = {
  habits: [
    {
      title: 'Go to Gym',
      description: 'Workout for at least 30 minutes',
      consistency: dates.map((date) => ({
        day: date,
        status: NONE,
      })),
    },
    {
      title: 'Read a book',
      description: 'Try to finish at least one book',
      consistency: dates.map((date) => ({
        day: date,
        status: NONE,
      })),
    },
    {
      title: 'Cook food',
      description: 'Learn to cook healthy meals',
      consistency: dates.map((date) => ({
        day: date,
        status: NONE,
      })),
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        habits: [...state.habits, action.payload],
      };

    case UPDATE_HABIT_STATUS:
      const idx = state.habits.findIndex((habit) => habit.title === action.title);
      if (idx !== -1) {
        const habit = state.habits[idx];
        const consistencyIdx = habit.consistency.findIndex((c) => c.day === action.day);
        if (consistencyIdx !== -1) {
          habit.consistency[consistencyIdx].status =
            action.payload === DONE ? NOT_DONE : action.payload === NOT_DONE ? NONE : DONE;
        }
      }
      return {
        ...state,
        habits: [...state.habits],
      };
    default:
      return state;
  }
};

export default reducer;
