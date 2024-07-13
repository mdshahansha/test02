import React from 'react';
import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';

import { useNavigate, useLocation } from 'react-router-dom';

const sidebarWidth = 200;

const useStyles = makeStyles((theme) => {
  return {
    navbar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d48f00',
    },
    page: {
      background: '#f9f9f9',
      width: '100%',
    },
    sidebar: {
      width: sidebarWidth,
    },
    sideBarPaper: {
      width: sidebarWidth,
    },
    main: {
      display: 'flex',
    },
    title: {
      padding: theme.spacing(2),
    },
    activeItem: {
      background: '#f4f4f4',
    },
    appbar: {
      width: `calc(100% - ${sidebarWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
  };
});
const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Habits',
      icon: <SubjectOutlined color="primary" />,
      path: '/',
    },
    {
      text: 'Add Habit',
      icon: <AddCircleOutlined color="primary" />,
      path: '/addHabits',
    },
  ];

  return (
    <div className={classes.main}>
      {/* Navbar */}

      <AppBar className={classes.appbar}>
        <Toolbar className={classes.navbar}>
          <Typography variant="h5" className={classes.title}>
            HABIT TRACKER
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        className={classes.sidebar}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.sideBarPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Habit Tracker
          </Typography>
        </div>
        <Divider />

        {/* List Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classes.activeItem : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
