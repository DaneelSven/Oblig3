import React, { Component } from 'react';
import axios from 'axios';
import { Counter } from './Counter';


     export class Answer extends Component
     {
         constructor(props) {
             super(props);
             this.state = {
                 data: [],
                 question: '',
                 answer: '',
                 date: '',
             }

             this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
             this.handleAnswer = this.handleAnswer.bind(this);
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
             const { answer } = this.state;

             return (
                 <div>
                     {this.state.data.map(obj => {
                         return (
                         <div className="card text-center text-white bg-secondary box">
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
                             )
                     }
                        ) }


                 </div>
                 
                 )
         }



    }

