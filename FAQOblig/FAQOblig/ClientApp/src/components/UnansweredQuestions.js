import React, { Component } from 'react';
import { UnansweredBox } from './UnansweredBox';

export class UnansweredQuestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SubmittedData: [],
        }
    }

    componentDidMount() {
        fetch("api/Contacts")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ SubmittedData: responseJson });
            })
            .catch(error => {
                console.error(error)
            });
    }

    render() {

        return (
            <div>
                <h2 className="text-center box2">Submitted Questions</h2>
                {this.state.SubmittedData.map(obj => {
                    return (
                        <UnansweredBox
                            id={obj.id}
                            firstname={obj.firstname}
                            lastname={obj.lastname}
                            email={obj.email}
                            question={obj.question}
                        />
                    )})}
            </div>
        )
    }
}