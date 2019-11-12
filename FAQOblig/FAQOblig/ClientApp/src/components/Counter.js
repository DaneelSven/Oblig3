import React, { Component } from 'react';
import { IoIosThumbsDown, IoIosThumbsUp } from "react-icons/io";
import axios from 'axios';

export class Counter extends Component {
  static displayName = Counter.name;


    Voting(id, votes) {
        axios.put('api/Questions/' + id + '?vote' + votes)
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

            <IoIosThumbsDown onClick={() => this.Voting(this.props.voteId, -1)} />
            <h7 aria-live="polite">Popularity: <strong>{this.props.votes}</strong></h7>
            <IoIosThumbsUp onClick={() => this.Voting(this.props.voteId, +1)}/>

            
      </div>
    );
  }
}
