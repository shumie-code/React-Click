import React, { Component } from "react"

class Nav extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }

    renderMessage(correct, gameWon, clear = false) {
        let message, className
        if(clear) {
            className = ''
        }
        else if  (correct === undefined) {
            message = 'Click an image to begin'
            className = ''
        } else {
            message = gameWon ? 'Winner, Winner, Chicken Dinner!' : (correct ? ' Your guess was right!' : 'Your guess was wrong!')
            className = correct ? 'correct' : 'incorrect'
        }

        window.clearTimeout(this.timeout)
        if (!clear & correct !== undefined) {
            this.timeout = window.setTimeout(this.renderMessage, gameWon)
        }
    }
}