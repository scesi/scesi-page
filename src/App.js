import React, { Component } from 'react'
import './App.css';
import Container from './components/Container'
import Head from './components/Head'
import Body from './components/Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
        <Container size={0.1} color= "black" style={{alignSelf: 'flex-end', flexDirection: 'column'}}>
          <p> Footer </p>
        </Container>
      </div>
    );
  }
}

export default App;
