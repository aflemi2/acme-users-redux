import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Users from './Users';
import UserForm from './UserForm';
import axios from 'axios';
import Nav from './Nav';

class App extends Component {
  constructor(){
    super();
    this.state={
      users: []
    };
    this.onCreateUser = this.onCreateUser.bind(this);
  }

  componentDidMount(){
    axios.get('/api/users')
    .then( results => results.data)
    .then( users => this.setState({ users }))
  }

 onCreateUser(user){
   axios.post('/api/users', user)
   .then( result => result.data)
   .then( user => this.setState({ users: [...this.state.users, user]}))
   .then( ()=> document.location.hash = ('/'));
 }

  render(){
    const { users } = this.state;
    const { onCreateUser } = this;
    return (
      <Router>
        <div>
          <Route render = { ({ location })=> <Nav path={ location.pathname } />} />
          <Route path='/' exact render = { ()=> <Users users = { users } /> } />
          <Route path='/users/create' exact render = { ()=> <UserForm onCreateUser = { onCreateUser }/> } />
        </div>
      </Router>
    );
  }
}

export default App;
