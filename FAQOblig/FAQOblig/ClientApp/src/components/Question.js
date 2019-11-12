import { Accordion, Card  } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';
import { Counter } from './Counter';
import { IoIosArrowBack } from "react-icons/io";

export class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
    }

    componentDidMount() {

        fetch("api/Questions")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ data: responseJson });
            })
            .catch(error => {
                console.error(error)
            });
    }

    render() {

        return (
            <div className="box">
                <h2 className="text-center box2">Frequently asked Questions</h2>
                {this.state.data.map(obj => {

                    return (
                        <div>
                            <div>
                                <Accordion className="box" defaultActiveKey="1">
                                    <Card className="cardBody" body inverse style={{ backgroundColor: '#333', borderColor: '#BDC3C7' }}>
                                        <Accordion.Toggle className="cardHeader" as={Card.Header} eventKey="0">
                                            Question number: {obj.id}
                                            <IoIosArrowBack className="arrow" />
                                            <h5>{obj.question}</h5>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="cardBody">
                                                <p><strong>Answer:</strong> {obj.answers}</p>
                                                <Counter votes={obj.votes} voteId={obj.id} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Question;