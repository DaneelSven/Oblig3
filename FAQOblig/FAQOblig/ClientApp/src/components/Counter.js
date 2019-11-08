import React, { Component } from 'react';

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
            
            <button className="btn btn-primary btn-sm btnRound" onClick={this.incrementCounter}>Upvote</button>

            <p aria-live="polite">Popularity: <strong>{this.state.currentCount}</strong></p>

            <button className="btn btn-primary btn-sm btnRound" onClick={this.decreaseCounter}>Downvote</button>


      </div>
    );
  }
}
