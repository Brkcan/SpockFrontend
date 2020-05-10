import React from 'react';
import Input from '../components/Input';
import {signup} from '../api/ApiCalls';

class UserSignupPage extends React.Component{

state ={
  username:null,
  displayName:null,
  password:null,
  passwordRepeat:null,
  pendingApiCall:false,
  errors:{}
}

  onChange = (event) => {
    const errors = {...this.state.errors}
    errors[event.target.name] = undefined
    if(event.target.name === 'password' || event.target.name === 'passwordRepeat'){
      if(event.target.name === 'password' && event.target.value !== this.state.passwordRepeat){
        errors.passwordRepeat = 'Password mismatch';
      }else if(event.target.name === 'passwordRepeat' && event.target.value !== this.state.password){
        errors.password = "Password mismatch";
      }else{
        errors.passwordRepeat = undefined;
      }
    }
    this.setState({
      [event.target.name]: event.target.value,
      errors,
    })
  }
  onClickSignup = async event => {
    event.preventDefault();
    const body = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password,
    }
    this.setState({
      pendingApiCall: true
    })
    try {
      const response = await signup(body);

    } catch (error) {
      if(error.response.data.validationErrors){
        this.setState({
          errors: error.response.data.validationErrors,
        })
      }
    }
    this.setState({
      pendingApiCall: false,
    })
  }

  render(){
    return(
      <div className="container">
      <form>
        <h1 className="text-center">Sign Up</h1>

        <Input label="Username"
         name="username"
         errors={this.state.errors.username}
         onChange={this.onChange} />

         <Input label="Display Name"
          name="displayName" errors={this.state.errors.displayName}
          onChange={this.onChange} />

        <Input label="Password"
          name="password" type="password"
          errors={this.state.errors.password}
          onChange={this.onChange}/>

          <Input label="Password Repeat"
            name="passwordRepeat" type="password"
            errors={this.state.errors.passwordRepeat}
            onChange={this.onChange}/>


        <div className="text-center">

        <button disabled={this.state.pendingApiCall}
        className="btn btn-outline-primary"
        onClick={this.onClickSignup}>

        {
           this.state.pendingApiCall === true ?
          <span className="spinner-border spinner-border-sm"></span> : ''
        }
        Sign Up
        </button>
        </div>
      </form>
      </div>
    );
  }
}

export default UserSignupPage;
