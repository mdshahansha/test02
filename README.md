# Habit Tracker App

This is a simple habit tracker application built with React and Redux.

## Installation

```bash
git clone https://github.com/deependra-shekhawat/habit_tracker_react.git
cd habit-tracker-app
npm install
npm start
```

## Project Structure

- **`src/store.js`**: Configures the Redux store.
- **`src/App.js`**: Sets up the routes and layout for the application.
- **`src/pages/Habits.js`**: Displays the list of habits.
- **`src/pages/AddHabits.js`**: Form to add new habits.
- **`src/components/HabitComponent.js`**: Component to display individual habit details.
- **`src/components/HabitDetails.js`**: Component to display and update habit status for each day.
- **`src/actions/habitActions.js`**: Contains action creators for habits.
- **`src/constants/habitStatus.js`**: Defines constants for habit statuses.

## Usage

### Adding a Habit

1. Navigate to the "Add Habit" page by clicking "Add Habit" in the navigation bar.
2. Fill out the form with the habit title and description.
3. Click "Submit" to add the habit to the list.

### Tracking Habit Progress

- On the main page, you'll see a list of your habits.
- Click on the status icons to update the progress for each day:
  - **Hourglass**: Not done yet
  - **Done**: Completed
  - **Cancel**: Not completed

## Dependencies

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [React-Router-DOM](https://reactrouter.com/)
- [@material-ui/core](https://material-ui.com/)
- [@material-ui/icons](https://material-ui.com/components/icons/)

## License

This project is licensed under the MIT License.
