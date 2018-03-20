import React, { Component } from 'react';

class UserForm extends Component {
  constructor(){
    super();
    this.state = {
      name: ''
    };
    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  onSave(ev){
    ev.preventDefault();
    this.props.onCreateUser({name: this.state.name});

  }

  onUpdate(ev){
    this.setState({ name: ev.target.value});
  }

  render(){
    const { name } = this.state;
    const { onSave, onUpdate } = this;
    return (
      <form onSubmit = { onSave }>
        <input value={ name } onChange = { onUpdate } />
        <button disabled={ name.length === 0}>Create User</button>
      </form>
    )
  }
}

export default UserForm;
