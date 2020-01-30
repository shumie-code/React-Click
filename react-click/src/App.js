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
}