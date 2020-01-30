import React, { Component } from 'react';
import GridMDC from "./components/GridMDC";
import PaperMDC from "./components/PaperMDC";
import TeamCard from "./components/CharCard";
import Score from "./components/Score";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import BottomNavMDC from "./components/BottomNavMDC";
import nba from "./nba.json";

class App extends Component {

    state = {
        logos: logos,
        pickedLogos: [],
        topScore: 0,
        alertMessage: ""
    }

    handlePicked = event => {
        const name = event.target.attributes.getNamedItem("name").value;
        this.shuffleLogos()
        this.checkGuess(name, this.updateTopScore)
    }

    shuffleLogos = () => {
        this.setState(this.state.logos = this.shuffleArray(this.state.logos))
    }

    shuffleArray = (a) => {
        var j, x, i;
        for (i = a.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    checkGuess = (name, cb) => {
        const newState = { ...this.state };
        if (newState.pickedLogos.includes(name)) {
            newState.alertMessage = `Picked Already "${name.toUpperCase()}"!`
            newState.pickedLogos = []
            this.setState(this.state = newState)
        } else {
            newState.pickedLogos.push(name)
            newState.alertMessage = `FANTASTIC!`
            this.setState(this.state = newState)
        }
        cb(newState, this.alertWinner)
    }

    updateTopScore = (newState, cb) => {
        if (newState.pickedLogos.length > newState.topScore) {
            newState.topScore++
            this.setState(this.state = newState)
        }
        cb(newState)
    }

    
}