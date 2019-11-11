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
            question: '',
            answer: '',
            date: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);

    }


    handleQuestion(e) {
        this.setState({

            question: e.target.value
        });
    }

    handleAnswer(e) {
        this.setState({
            answer: e.target.value
        });
    }

    handleSubmitAnswer(event) {
        axios.post("api/Questions", this.state)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            });
    }


    handleSubmit(event) {

        axios.post("api/Questions", this.state)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            });
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
                {this.state.data.map(obj => {
                    return (
                        <div>
                            {obj.answers === null ?
                                <div>
                                <Accordion  className="box" defaultActiveKey="0">
                                    <Card className="cardBody" body inverse style={{ backgroundColor: '#333', borderColor: '#BDC3C7' }}>
                                            <Accordion.Toggle className="cardHeader" as={Card.Header} eventKey="0">
                                                Question number: {obj.id}
                                                <IoIosArrowBack className="arrow" />

                                                <h5>{obj.question}</h5>

                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="cardBody">
                                                <p>We are sorry your question is currently under review we will provide an answer soon. Thank you for your patience!</p>
                                          
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </div>

                                : <div>
                                    <Accordion className="box" defaultActiveKey="0">
                                    <Card className="cardBody" body inverse style={{ backgroundColor: '#333', borderColor: '#BDC3C7' }}>
                                        <Accordion.Toggle className="cardHeader" as={Card.Header} eventKey="0">
                                                Question number: {obj.id}
                                                <IoIosArrowBack className="arrow" />

                                            <h5>{obj.question}</h5>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                                <Card.Body className="cardBody">
                                                    <p><strong>Answer:</strong> {obj.answers}</p>
                                                    <Counter/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </div>
                        }
                        </div>
                    )
                })}
            </div>




        );
    }
}

export default Question;