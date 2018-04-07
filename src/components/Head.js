import React, { Component } from 'react'
import Container from './Container'
import logo from '../scesi.png'

class Head extends Component {
  render() {
    return (
      <Container  size= {0.3} color="black">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: 'white'}}>happy hacking</p>
      </Container>
    );
  }
}

export default Head
