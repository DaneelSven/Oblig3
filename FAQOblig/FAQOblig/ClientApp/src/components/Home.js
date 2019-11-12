import React, { Component } from 'react';
import Question from './Question';
import '../custom.css'

export class Home extends Component {
    static displayName = Home.name;

    render() {

      return (
          <div className="a" >
              <Question />
          </div>      
    );
  }
}
