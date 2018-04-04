import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import logo from './scesi.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container  size= {0.3} color="black">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{color: 'white'}}>happy hacking</p>
        </Container>
        <Container size={0.6} color="white" />
        <Container size={0.1} color= "black" />
      </div>
    );
  }
}

export default App;
