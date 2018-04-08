import React, { Component } from 'react'
import Container from './Container'
import BackgroundBubbles from './BublesBackground'

class Body extends Component {
  render() {
    return (
      <Container size={0.6} color="white" style={{margin: 50}}>
        <BackgroundBubbles />
        <div style={{backgroundColor: 'white', margin: 100}}> 
          <p> lorem ipsum </p>
        </div>
      </Container>
    );
  }
}

export default Body
