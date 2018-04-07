import React, { Component } from 'react'
import Container from './Container'
import './bubble.css'

class Body extends Component {
  render() {
    return (
      <Container size={0.6} color="white" style={{margin: 50}}>
        <div id="background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div>
        <div style={{backgroundColor: 'white', margin: 100}}> 
          <p> lorem ipsum </p>
        </div>
      </Container>
    );
  }
}

export default Body
