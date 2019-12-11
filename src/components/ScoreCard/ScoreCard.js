import React from 'react';
import { ChildClass } from '../ChildClass/ChildClass';
import { ScoreTicker } from '../ScoreTicker/ScoreTicker';

export class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { holes: [1,],
                  scores: [3,],
    };
    this.addHole = this.addHole.bind(this);
    this.subHole = this.subHole.bind(this);
    this.addScore = this.addScore.bind(this);
    this.subScore = this.subScore.bind(this);
  }

  addHole() {
    if (this.state.holes.length < 21) {
      const newScores = this.state.scores;
      this.state.holes.push(1);
      this.state.scores.push(3);
      this.setState({ scores: newScores });
    }
    else {
      console.log('Too Many Holes!');
    }
  }

  subHole() {
    if (this.state.holes.length > 1) {
      const newScores = this.state.scores;
      this.state.holes.pop(1);
      this.state.scores.pop(3);
      this.setState({ scores: newScores });  
    } else {
      console.log('Too few to remove!');
    }

  }

  totalScore() {
    let total = 0;
    for (let i=0; i < this.state.scores.length; i++) {
        total = total + this.state.scores[i];
    }
    return total;
  }

  addScore() {
    let newScores = this.state.scores;
    newScores[0] += 1;
    this.setState({scores: newScores});
  }

  subScore() {
    let newScores = this.state.scores;
    newScores[0] -= 1;
    this.setState({scores: newScores});
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    
    const holeList = this.state.holes.map((hole, i) => 
          <ChildClass holeNum={i+1} 
                      onClick={this.addScore}
                      onClick={this.subScore}
                      count={this.state.scores[i]}/>
    );
    
    return (
        <div>
        <p>Total Score: {this.totalScore()}</p>
        <button style={styles} onClick={this.addHole}>Add Hole</button>
        <button style={styles} onClick={this.subHole}>Subtract Hole</button>
        {holeList}
        </div>
    );
  }
}

const styles = { borderRadius: '30%'}