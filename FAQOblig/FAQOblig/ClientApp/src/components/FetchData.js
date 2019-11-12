import React, { Component } from 'react';
import {Contact} from './Contact'
import { UnansweredQuestions } from './UnansweredQuestions';

export class FetchData extends Component {
  static displayName = FetchData.name;

  render() {
 
    return (
        <div>
            <UnansweredQuestions/>
      </div>
    );
  }

 
}
