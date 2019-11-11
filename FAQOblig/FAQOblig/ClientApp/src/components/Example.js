import { Accordion, Card  } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';


export class Example extends Component {


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
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Click me!
    
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Click me!
    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>




        );
    }
}

export default Example;