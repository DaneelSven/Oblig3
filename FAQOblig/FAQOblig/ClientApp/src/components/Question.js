import { Accordion, Card  } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';
import { Counter } from './Counter';
import { IoIosArrowBack } from "react-icons/io";
import { Box } from './Box';

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
                        <div key={obj.id}>
                            <Box
                                question={obj.question}
                                answers={obj.answers}
                                id={obj.id}
                                votes={obj.votes}


                            />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Question;