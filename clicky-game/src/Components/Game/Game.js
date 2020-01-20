import React from 'react'
import { Col, CardPanel } from 'react-materialize';

const Game = props => (
    <Col s={12} m={4} l={3}>
    <CardPanel onClick={() => props.clickHandler(props.image.imageName)} className={"hoverable red darken-4 light-text center" + (props.correct === false ? "shake" : "")}>
        <Images image={props.image} />
    </CardPanel>
    </Col>
)