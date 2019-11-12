import React, { Component } from 'react';
import { IoIosThumbsDown, IoIosThumbsUp } from "react-icons/io";
import axios from 'axios';

export class Counter extends Component {
    static displayName = Counter.name;

    Voting(id, votes) {
        axios.put('api/Questions/' + id + '?votes=' + votes)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        window.location.reload(false)
    }

  render() {
    return (
        <div>
            <IoIosThumbsDown className="counter icon" onClick={() => this.Voting(this.props.voteId, -1)} />
            <h7 className="counter" aria-live="polite">Popularity: <strong>{this.props.votes}</strong></h7>
            <IoIosThumbsUp className="icon2" onClick={() => this.Voting(this.props.voteId, +1)}/>  
      </div>
    );
  }
}
