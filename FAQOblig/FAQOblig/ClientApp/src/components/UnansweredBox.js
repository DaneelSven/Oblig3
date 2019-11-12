import { Accordion, Card } from 'react-bootstrap';
import React, { Component } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";


export class UnansweredBox extends Component {


    state = {
        data: [],
        open: false
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
                                <h5><strong>First name: </strong> {this.props.firstname}</h5>
                                <h5><strong>Last name: </strong>{this.props.lastname}</h5>
                                <h5><strong>Email: </strong>{this.props.email}</h5>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            )
    }
}
