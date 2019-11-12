import { Accordion, Card } from 'react-bootstrap'
import React, { Component } from 'react';
import { Counter } from './Counter';
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";


export class Box extends Component {
    state = {
        data: [],
        open: false
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

    changeArrow =() => {
        this.setState({
            open: !this.state.open
        })
}

    render() {
        return (
            <div>
                <Accordion className="box" defaultActiveKey="1">
                    <Card className="cardBody" body inverse style={{ backgroundColor: '#333', borderColor: '#BDC3C7' }}>
                        <Accordion.Toggle className="cardHeader" as={Card.Header} onClick={this.changeArrow} eventKey="0">
                            Question number: {this.props.id}
                                    {(this.state.open) ?
                                        <IoIosArrowBack className="arrow" />
                                        : <IoIosArrowDown className="arrow" />
                                    }
                            <h5>{this.props.question}</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="cardBody">
                                <p><strong>Answer:</strong> {this.props.answers}</p>
                                <Counter votes={this.props.votes} voteId={this.props.id} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>          
            )
    }
}
