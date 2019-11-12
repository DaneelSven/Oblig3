import { Accordion, Card } from 'react-bootstrap'
import React, { Component } from 'react';
import { IoIosArrowBack } from "react-icons/io";

export class UnansweredQuestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

    }

    componentDidMount() {
        fetch("api/Contacts")
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
                <h2 className="text-center box2">Submitted Questions</h2>
                {this.state.data.map(obj => {

                    return (
                        <Accordion className="box" defaultActiveKey="1">
                            <Card className="cardBody" body inverse style={{ backgroundColor: '#333', borderColor: '#BDC3C7' }}>
                                <Accordion.Toggle className="cardHeader" as={Card.Header} eventKey="0">
                                    Unanswered Question number: {obj.id}
                                    <IoIosArrowBack className="arrow" />
                                    <h5><strong>Question: </strong>{obj.question}</h5>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="cardBody">
                                        <h5><strong>First name: </strong> {obj.firstname}</h5>
                                        <h5><strong>Last name: </strong>{obj.lastname}</h5>
                                        <h5><strong>Email: </strong>{obj.email}</h5>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    )
                })}
            </div>
        )
    }
}