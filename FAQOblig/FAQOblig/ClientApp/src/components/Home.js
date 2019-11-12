import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';
import '../custom.css'



export class Home extends Component {
    static displayName = Home.name;

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
    }

    handleQuestion(e) {
        this.setState({
            question: e.target.value
        });
    }


    handleSubmit(event) {

        axios.post("api/Questions", this.state)
            .then(response => {
                console.log(response)
            }).catch (error => {
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

        const { question, answer } = this.state;

      return (
          <div className="a" >
              <Question />
          </div>  
          
    );
  }
}
