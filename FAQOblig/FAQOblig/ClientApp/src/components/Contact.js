import React, { Component } from "react";
import axios from 'axios';
import { UnansweredQuestions } from "./UnansweredQuestions";



 export class Contact extends Component {

     state = {
         firstname: '',
         lastname: '',
         email: '',
         question: ''
     }

     HanldeChange = (e) => {
         const {name, value} = e.target;

         this.setState({
             [name]: value
         })

     }

     handleSubmit = (event) => {
         event.preventDefault()
         axios.post('/api/contacts', this.state)
             .then(response => {
                 console.log(response)
                 this.setState({
                     firstname: '',
                     lastname: '',
                     email: '',
                     question: ''
                 })
                 
             }).catch(error => {
                 console.log(error)
                 
             })
         
     }

     handleSubmit2(event) {

         axios.post("api/Questions", this.state)
             .then(response => {
                 console.log(response)
             }).catch(error => {
                 console.log(error)
             });
     }

     render() {
         return (

             <div>

                 <form onSubmit={this.handleSubmit}>

                     <input type="text" value={this.state.firstname} name="firstname" onChange={this.HanldeChange} required/>
                     <input type="text" value={this.state.lastname} name="lastname" onChange={this.HanldeChange} required />
                     <input type="text" value={this.state.email} name="email" onChange={this.HanldeChange} required />
                     <input type="text" value={this.state.question} name="question" onChange={this.HanldeChange} required/>

                     <button className="btn btn-outline-secondary" type="submit">Ask</button>

                 </form>

             </div>
         );
 }

}

