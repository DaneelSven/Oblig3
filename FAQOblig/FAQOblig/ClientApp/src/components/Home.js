import React, { Component } from 'react';
import axios from 'axios';
import { Counter } from './Counter';
import { Accordion, Card } from 'react-bootstrap';


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
              {this.state.data.map(obj => {
                  return (

                      <div>
                          <div>
                              {obj.answers === null

                                  ? <div className="card text-center text-white bg-secondary box">
                                      <div className="card-header">
                                          <div className="form-group">
                                              <div className="row">
                                                  <div className="col-md-2">
                                                      <Counter />
                                                  </div>


                                                  <div className="col-md-8 text-center headerMargin">
                                                      Question number: {obj.id}
                                                      <h5>{obj.question}</h5>
                                                  </div>
                                              </div>

                                          </div>

                                      </div>
                                      <h6>Nobody answered this question so far if you know the answer feel free to answer</h6>
                                      <form onSubmit={this.handleSubmitAnswer}>
                                          <input type="text"
                                              name="answer"
                                              value={answer}
                                              onChange={this.handleAnswer}
                                              className="text-center"
                                              placeholder="Add the answer here:">
                                          </input>
                                          <button className="btn blue-gradient">answer the question</button>
                                      </form>
                                  </div>

                                  : <div className="card text-center text-white bg-secondary box">
                                      <div className="card-header">
                                          <div className="form-group">
                                              <div className="row">
                                                  <div className="col-md-2">
                                                      <Counter />
                                                  </div>


                                                  <div className="col-md-8 text-center headerMargin">
                                                      Question number: {obj.id}
                                                      <h5>{obj.question}</h5>
                                                  </div>
                                              </div>

                                          </div>

                                      </div>

                                      <p>Answer: {obj.answers}</p>
                                      <p>Date question submited: {obj.date}</p>
                                  </div>


                              }
                          </div>

                      </div>
                                               
                      

                  )
 
              })}

             
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
