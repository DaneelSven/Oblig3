﻿import React, { Component } from "react";
import axios from 'axios';
import { InputGroup, FormControl, Form } from 'react-bootstrap';

 export class Contact extends Component {

     state = {
         firstname: '',
         lastname: '',
         email: '',
         question: ''
     }

     handleStateChange = (e) => {
         const {name, value} = e.target;

         this.setState({
             [name]: value
         })
     }

     handleContactSubmitt = (event) => {
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
                 window.location.href = "/submitted"
             }).catch(error => {
                 console.log(error)   
             })
     }

     render() {
         return (

             <div>
                 <h2 className="text-center box2 ">Contact Us</h2>
                 <form onSubmit={this.handleContactSubmitt}>

                     <InputGroup className="mb-3">
                         <InputGroup.Prepend>
                             <InputGroup.Text id="inputGroup-sizing-default">First Name</InputGroup.Text>
                         </InputGroup.Prepend>
                         <FormControl
                             aria-label="First Name"
                             aria-describedby="inputGroup-sizing-default"
                             type="text" value={this.state.firstname}
                             name="firstname"
                             onChange={this.handleStateChange}
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
                             onChange={this.handleStateChange}
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
                             onChange={this.handleStateChange}
                             required
                         />
                     </InputGroup>

                     <Form.Group controlId="exampleForm.ControlTextarea1">
                         <Form.Control
                             placeholder="Ask your Question"
                             as="textarea"
                             rows="3"
                             aria-label="Your Question"
                             aria-describedby="inputGroup-sizing-default"
                             type="text" value={this.state.question}
                             name="question"
                             onChange={this.handleStateChange}
                             required/>
                     </Form.Group>
                     <button className="btn btn-dark btn-lg btn-block" type="submit">Submitt your request</button>
                 </form>
             </div>
         );

     }

}

