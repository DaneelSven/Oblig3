import React, { Component } from 'react';
import { Counter } from './Counter';

export class Home extends Component {
    static displayName = Home.name;



    state = {
        data: []
    };

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

  render () {
      return (
          <div >

              {this.state.data.map(obj => {
                  return(
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

                          <p>Answer: {obj.answers}</p>
                          <p>Date question submited: {obj.date}</p>
                      </div>
                         
                  )
 
              })}
              <div className="input-group box">
                  <input type="text" className="form-control" placeholder="Ask a Question" aria-label="Question with button" id="a" aria-describedby="button-addon4"/>
                  <div className="input-group-append" id="button-addon4">
                      <button className="btn btn-outline-secondary" onClick={() => fetch({
                          method: 'POST',
                          data: document.getElementById('a').value
                      }
                      )
                      
                      } type="button">Ask</button>
                          </div>

              </div>

              <form onSubmit={this.handleSubmit}>
                  <input type="text" name="question" id="a" onChange={this.handleAnswer} className="inputGroup-sizing-default"></input>
                  <div>
                      <button type="submit" className="btn btn-secondary" onClick={() => document.getElementById("a").value}>Add Question </button>
                  </div>
              </form>

              

          </div>  
          
    );
  }
}
