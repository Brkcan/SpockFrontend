import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Context from './Context';

class HomeScreen extends React.Component{
  render(){
    return(
        <div>
          
          <Context />
          <Footer />
        </div>
    );
  }
}

export default HomeScreen;
