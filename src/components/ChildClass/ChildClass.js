import React from 'react';
import { ScoreTicker } from '../ScoreTicker/ScoreTicker';
import { NameForm } from '../NameForm/NameForm';

export class ChildClass extends React.Component {
  render() {
    return (
      <div>
          Hole {this.props.holeNum} Score: {this.props.count}
          <ScoreTicker onClick={this.props}/>
          <NameForm />
      </div>
    );
  }
}

const styles = {
                    borderRadius: '30%',
                    fontSize: 20,
                    font: 'Arial',
                    display: 'inline'
                }