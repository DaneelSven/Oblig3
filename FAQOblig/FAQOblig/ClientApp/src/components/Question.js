import React, { Component } from 'react';
import { Box } from './Box';

export class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionData: [],

        }
    }

    componentDidMount() {
        fetch("api/Questions")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ questionData: responseJson });
            })
            .catch(error => {
                console.error(error)
            });
    }

    render() {

        return (
            <div className="box">
                <h2 className="text-center box2 ">Frequently asked Questions</h2>
                {this.state.questionData.map(obj => {

                    return (
                        <div key={obj.id}>
                            <Box
                                question={obj.question}
                                answers={obj.answers}
                                id={obj.id}
                                votes={obj.votes}
                            />
                        </div>
                    )})}
            </div>
        );
    }
}

export default Question;