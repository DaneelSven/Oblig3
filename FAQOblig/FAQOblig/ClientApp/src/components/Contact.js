import React, { Component } from "react";
import axios from 'axios';
import { InputGroup, FormControl } from 'react-bootstrap'

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

                 window.location.href = "/fetch-data"

                 
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
                 <h2 className="text-center box2">Contact Us</h2>
                 <form onSubmit={this.handleSubmit}>

                     <InputGroup className="mb-3">
                         <InputGroup.Prepend>
                             <InputGroup.Text id="inputGroup-sizing-default">First Name</InputGroup.Text>
                         </InputGroup.Prepend>
                         <FormControl
                             aria-label="First Name"
                             aria-describedby="inputGroup-sizing-default"
                             type="text" value={this.state.firstname}
                             name="firstname"
                             onChange={this.HanldeChange}
                             required
                         />
                     </InputGroup>

                     <InputGroup className="mb-3">
                         <InputGroup.Prepend>
                             <InputGroup.Text id="inputGroup-sizing-default">Last Name</InputGroup.Text>
                         </InputGroup.Prepend>
                         <FormControl
                             aria-label="Last Name"
                             aria-describedby="inputGroup-sizing-default"
                             type="text" value={this.state.lastname}
                             name="lastname"
                             onChange={this.HanldeChange}
                             required
                         />
                     </InputGroup>

                     <InputGroup className="mb-3">
                         <InputGroup.Prepend>
                             <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                         </InputGroup.Prepend>
                         <FormControl
                             aria-label="Email"
                             aria-describedby="inputGroup-sizing-default"
                             type="email" value={this.state.email}
                             name="email"
                             onChange={this.HanldeChange}
                             required
                         />
                     </InputGroup>

                     <InputGroup className="mb-3">
                         <InputGroup.Prepend>
                             <InputGroup.Text id="inputGroup-sizing-default">Your Question</InputGroup.Text>
                         </InputGroup.Prepend>
                         <FormControl
                             aria-label="Your Question"
                             aria-describedby="inputGroup-sizing-default"
                             type="text" value={this.state.question}
                             name="question"
                             onChange={this.HanldeChange}
                             required
                         />
                     </InputGroup>

                     <button className="btn btn-outline-secondary" type="submit">Ask</button>

                 </form>

             </div>
         );
 }

}

