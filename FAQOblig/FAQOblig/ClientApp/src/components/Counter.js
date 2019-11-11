import React, { Component } from 'react';
import { Example } from './Example';
import { IoIosThumbsDown, IoIosThumbsUp  } from "react-icons/io";

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
        <div>

            <IoIosThumbsDown onClick={this.decreaseCounter} />
            <h7 aria-live="polite">Popularity: <strong>{this.state.currentCount}</strong></h7>
            <IoIosThumbsUp onClick={this.incrementCounter}/>

            
      </div>
    );
  }
}
