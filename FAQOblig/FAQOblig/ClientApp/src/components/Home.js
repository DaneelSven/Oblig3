import React, { Component } from 'react';

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
                      <div className="card text-center box">
                          <div className="card-header">
                          Question number: {obj.id}
                          </div>
                          <p>Date question submited: {obj.date}</p>
                        <h5>{obj.question}</h5>
                          <p>Answer: {obj.answers}</p>
                      </div>
                         
                  )
 
              })}
              <div class="input-group box">
                  <input type="text" class="form-control" placeholder="Ask a Question" aria-label="Question with button" id="a" aria-describedby="button-addon4"/>
                  <div class="input-group-append" id="button-addon4">
                      <button class="btn btn-outline-secondary" onClick={() => fetch({
                          method: 'POST',
                          data: document.getElementById('a').value
                      }
                      )
                      
                      } type="button">Ask</button>
                          </div>

              </div>

          </div>  
          
    );
  }
}
