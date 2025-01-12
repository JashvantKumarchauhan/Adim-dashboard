// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
  return (
    <List component="nav">
      <ListItem button component={Link} to="/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/tables">
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem button component={Link} to="/charts">
        <ListItemText primary="Charts" />
      </ListItem>
      <ListItem button component={Link} to="/calendar">
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={Link} to="/kanban">
        <ListItemText primary="Kanban" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
