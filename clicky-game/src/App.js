import React, { Component } from 'react';
import { Row, CardPanel, Col } from 'react-materialize';
import Nav from './components/Nav/Nav';
import Game from './Components/Game';
import Imgs from '../public/imgs';

// Initalize App component state 
class App extends Component {
  state = {
    images: [],
    clicked: [],
    score: 0,
    highScore: 0,
    correct: undefined,
    gameWon: false
  }

// Create logic that renders random image shown
random = (a, b) => Math.random() > .5 ? -1 : 1

// Event handler for images clicked
clickHandler = image => {
  if (this.state.clicked.indexOf(images) === -1 {
    let score = this.state.clicked.length + 1,
    clicked = score === this.state.images.length ? [] : [...this.state.clicked, imageName]

    this.setState({ 
      images: this.state.images.sort(this.random),
      clicked: clicked,
      score: score,
      highScore: Math.max(this.state.highScore, score),
      correct: true,
      gameWon: score === this.state.images.length
    })
  } else {
    this.setState({
      
    })
  })
}
}