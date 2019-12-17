import React from 'react';
import { ScoreTicker } from '../ScoreTicker/ScoreTicker';

export class ChildClass extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { test_val: 5 };
    this.testFunc = this.testFunc.bind(this);
    };

  testFunc() {
    this.setState({ test_val: this.state.test_val + 5});
  }

  render() {
    return (
      <div>
          Hole {this.props.holeNum} Score: {this.props.scores}
          <ScoreTicker addScore={this.props.addScore}
                       subScore={this.props.subScore}
                         scores={this.props.scores}
                         testFunc={this.testFunc}
                         testVal={this.state.test_val}/>
      </div>
    );
  }
}

