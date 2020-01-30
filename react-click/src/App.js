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

    alertWinner = (newState) => {
        if (newState.pickedLogos.length === 23) {
            newState.alertMessage = "Winner, Winner!!!";
            newState.pickedLogos = [];
            this.setState(this.state = newState)
        }
    }

    render() {
        return (
            <div>
                <NavBar style={{ background: "#313133", marginBottom: "5px" }} />

                <GridMDC container direction="column" style={{ margin: "0 auto", maxWidth: 945 }}>

                    <GridMDC item lg={12}>
                        <PaperMDC>
                            {this.state.alertMessage === "FANTASTIC!" ? (
                                <Alert message={this.state.alertMessage} style={{ color: "green" }} />
                            ) : (
                                <Alert message={this.state.alertMessage} style={{ color: "red" }} />
                            )}
                        </PaperMDC>
                    </GridMDC>

                    <GridMDC container justify="space-between">

                        <GridMDC item lg={6} md={6} sm={12} xs={12}>
                            <PaperMDC>
                                <Score type="Score" score={this.state.pickedLogos.length} />
                            </PaperMDC>
                        </GridMDC>

                        <GridMDC item lg={6} md={6} sm={12} xs={12}>
                            <PaperMDC>
                                <Score type="Top Score" score={this.state.topScore} />
                            </PaperMDC>
                        </GridMDC>
                    </GridMDC>
                </GridMDC>

                <GridMDC container spacing={24} justify="center" style={{ maxWidth: 945, margin: "0 auto"}}>
                    {this.state.nba.map(logo => (
                        <GridMDC item lg={3} md={3} sm={4} xs={6}>
                        <TeamCard
                        id={logo.id}
                        name={logo.name}
                        image={logo.image}
                        key={logo.id}
                        handlePicked={this.handlePicked}
                        />
                        </GridMDC>
                    ))}
                </GridMDC>
                <BottomNavMDC style={{ background: "#313133", marginTop: "17.5px", paddingTop: "15px", borderTop: "2.5px solid slategray" }}>
                    <a href="https://github.com/shumie-code/React-Click" target="_blank" className="link" alt="clicky-game"><i className="fa fa-github fa-2x"></i></a>
                </BottomNavMDC>
            </div>
        )
    } 
}

export default App;