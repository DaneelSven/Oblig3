import React, { Component } from 'react';
import { UnansweredQuestions } from './UnansweredQuestions';

export class Submitted extends Component {
  static displayName = Submitted.name;

  render() {
 
    return (
        <div>
            <UnansweredQuestions/>
      </div>
    );
  }
}
