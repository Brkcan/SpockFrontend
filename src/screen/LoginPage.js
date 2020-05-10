import React from 'react';
import Input from '../components/Input';
import {login} from '../api/ApiCalls';
import Navbar from '../components/Navbar';
import axios from 'axios';
import greyderpng from '../resource/greyder.png';

class LoginPage extends React.Component {
  state = {
    username:null,
    password:null,
    error: null,
    pendingApiCall:false
  }

  componentDidMount() {
    this.interceptorsRequest = axios.interceptors.request.use((request) => {
      this.setState({
        pendingApiCall: true
      })
      return request;
    })
    this.interceptorsResponse = axios.interceptors.response.use((response) => {
      this.setState({
        pendingApiCall: false
      })
      return response;
    },(error) => {
      this.setState({
        pendingApiCall: false
      })
      throw error;
    })
  }

  onChange = event => {
    const {error} = this.state;
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      error:null
    })
  }

  onClickLogin = async event => {
    event.preventDefault();
    const {username, password} = this.state;
    const creds = {
      username: username,
      password: password,
    }
    const {onLoginSuccess} = this.props;
    this.setState({
      error: null,
    })
    try {
      const response = await login(creds)
      this.props.history.push(`/homescreen/${username}`);
      onLoginSuccess(username);
    } catch (apiError) {
      this.setState({
        error: apiError.response.data.message
      })
    }

  }

  render(){
    const {pendingApiCall} = this.props;
    return(
      <div>

      <div className="container">

        <form>
          <h1 className="text-center">Login</h1>
            <Input label="Username" name="username" onChange={this.onChange}/>
            <Input label="Password" name="password" type="password" onChange={this.onChange}/>
          {this.state.error ?   <div className="alert alert-danger" role="alert">
              {this.state.error}
            </div> : ''
          }
            <div className="text-center">
            <button className="btn btn-outline-primary"
             onClick={this.onClickLogin} disabled={pendingApiCall}>
              Login
            </button>
            </div>
        </form>
      </div>
      <hr></hr>
      <div className="img">
        <img src={greyderpng} style={{paddinLeft: '100px'}}/>
      </div>
      </div>
    );
  }
}

export default LoginPage;
