import { Accordion, Card } from 'react-bootstrap'
import React, { Component } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { UnansweredBox } from './UnansweredBox';

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
                        <UnansweredBox
                            id={obj.id}
                            firstname={obj.firstname}
                            lastname={obj.lastname}
                            email={obj.email}
                            question={obj.question}
                        />
                    )
                })}
            </div>
        )
    }
}