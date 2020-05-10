import React from 'react';
import axios from 'axios';

export function withApiProgress(WrappedComponent){
  return class extends React.Component{
    state = {
      pendingApiCall:false,

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
    render(){
      const {pendingApiCall} = this.state;
      return (
        < WrappedComponent pendingApiCall={pendingApiCall}/>
      );
    }
  }
}
