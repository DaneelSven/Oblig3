import React, { Component } from 'react';
import { Example } from './Example'

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
      this.incrementCounter = this.incrementCounter.bind(this);
      this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
        currentCount: this.state.currentCount + 1
        
    });
    }

    decreaseCounter() {
    this.setState({
        currentCount: this.state.currentCount - 1
        
    });
    }

 

  render() {
    return (
        <div className="text-left ">
            
            <button type="button" className="btn btn-success btn-rounded" onClick={this.incrementCounter}>Upvote</button>
            <br></br>
            <div className="text-center">
                <h7  aria-live="polite">Popularity: <strong>{this.state.currentCount}</strong></h7>
            </div>
            <button className="btn btn-danger" onClick={this.decreaseCounter}>Downvote</button>

            <div>
                <Example/>
            </div>
      </div>
    );
  }
}
