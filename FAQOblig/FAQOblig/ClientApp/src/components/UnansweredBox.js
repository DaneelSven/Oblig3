import { Accordion, Card } from 'react-bootstrap';
import React, { Component } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";


export class UnansweredBox extends Component {


    state = {
        open: false
    }

    changeArrow = () => {
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
                        Unanswered Question number: {this.props.id}
                        {(this.state.open) ?
                            <IoIosArrowBack className="arrow" />
                            : <IoIosArrowDown className="arrow" />                            
                            }
                            <h5><strong>Question: </strong>{this.props.question}</h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="cardBody">
                                <p><strong>First name: </strong> {this.props.firstname}</p>
                                <p><strong>Last name: </strong>{this.props.lastname}</p>
                                <p><strong>Email: </strong>{this.props.email}</p>
                                <p><strong>Answer: </strong>Your question is currently under review and we will provide you with an answer shortly,
                                    Thank you for your patience!</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            )
    }
}
