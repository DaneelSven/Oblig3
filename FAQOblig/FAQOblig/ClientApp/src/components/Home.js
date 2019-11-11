import React, { Component } from 'react';
import axios from 'axios';
import { Counter } from './Counter';
import { Accordion, Card } from 'react-bootstrap';
import Example from './Example';


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

              <Example/>
             
              <div className="input-group box">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Ask a Question"
                      aria-label="Question with button" 
                      aria-describedby="button-addon4" />
                  <div className="input-group-append" id="button-addon4">
                      <button className="btn btn-outline-secondary"  type="button">Ask</button>
                          </div>

              </div>


              <form onSubmit={this.handleSubmit}>
                  <input
                      type="text"
                      name="question"
                      value={question}
                      onChange={this.handleQuestion}
                      placeholder="ask a question"
                      className="inputGroup-sizing-default" >
                  </input>
                  <div>
                      <button type="submit" className="btn btn-secondary">Add Question </button>
                  </div>
              </form>

              

          </div>  
          
    );
  }
}
