import React, { Component } from 'react';
import { Row, CardPanel, Col } from 'react-materialize';
import Nav from './Components/Navbar/Nav';
import Game from './Components/Game';
import images from '../public';


// Initialize App component state 
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
  if (this.state.clicked.indexOf(images) === -1) {
    let score = this.state.clicked.length + 1,
    clicked = score === this.state.images.length ? [] : [...this.state.clicked]

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
      images: this.state.images.sort(this.random),
      clicked: [],
      score: 0,
      correct: false,
      gameWon: false
    })
  }
}

render() {
  return (
    <div>
      <div className="container-fluid">
        <Nav correct={this.state.correct} gameWon={this.state.gameWon} score={this.state.score} highScore={this.state.highScore} />
        <Row>
          <Col s={12}>
            <CardPanel>
              <p>CLick on a team LOGO to up your score, BEWARE! Do not click the same image twice!</p>
            </CardPanel>
          </Col>
        </Row>
      </div>
    <div className="container">
      <Row>
        {this.state.images.map(images => <Game correct={this.state.correct} key={images.logoName} images={images} clickHandler={this.clickHandler} />)}
      </Row>
      </div>
    </div>
  )
}
}

export default App;