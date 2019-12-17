import React from 'react';
import { ChildClass } from '../ChildClass/ChildClass';

export class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { holes: 1,
                  scores: 3,
                  mood: 'good',
    };
    this.addHole = this.addHole.bind(this);
    this.subHole = this.subHole.bind(this);
    this.addScore = this.addScore.bind(this);
    this.subScore = this.subScore.bind(this);
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood === 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  addHole() {
    if (this.state.holes.length < 21) {
        this.setState({ scores: this.state.scores.push(3),
                      holes: this.state.holes.push(1) });
    }
    else {
      console.log('Too Many Holes!');
    }
  }

  subHole() {
    if (this.state.holes.length > 1) {
      this.state.holes.pop(1);
      this.state.scores.pop(3);
    } else {
      alert('Too few to remove!');
    }

  }

  totalScore() {
      // sum the array (note: "a" is accumulator)
      // return this.state.scores.reduce((a, b) => a + b, 0);
      return this.state.scores;
  }

  addScore() {
    let newScore = this.state.scores
    this.setState({ scores: newScore += 1})
    console.log('Adding 1!');
  }

  subScore() {
    let newScore = this.state.scores
    this.setState({scores: newScore -= 1});
    console.log('Subtracting 1!')
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    // const holeList = this.state.holes.map((hole, i) => 
    //       <ChildClass holeNum={i+1} 
    //                   score={this.state.scores[i]}
    //                   key={hole+i}
    //                   addScore={this.addScore}
    //                   subScore={this.subScore}/>
    // );
    
    return (
        <div>
        <p>Course: {this.props.course}: Total Score: {this.totalScore()}</p>
        <button onClick={this.addHole}>Add Hole</button>
        <button onClick={this.subHole}>Subtract Hole</button>
        <ChildClass holeNum={1} 
                    key={1}
                    scores={this.state.scores}
                    addScore={this.addScore}
                    subScore={this.subScore}/>
        <p>Mood Toggler<button onClick={this.toggleMood}>{this.state.mood}</button></p>
        </div>
    );
  }
}