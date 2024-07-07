// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

const App = () => {
  return (
    <ThemeSwitcher>
      <Router>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 1, padding: '16px' }}>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/tables" component={Tables} />
              <Route path="/charts" component={Charts} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/kanban" component={Kanban} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeSwitcher>
  );
};

export default App;
