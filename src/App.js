import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Users from './Users';

const App = ()=> {
  return (
    <Router>
      <div>
        <Route component= { Users } />
      </div>
    </Router>
  );
};

export default App;
