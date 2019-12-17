import React from 'react';
import { Button } from '../Button/Button';
import { Button2 } from '../Button2/Button2';
import WheelReact from 'wheel-react';

export class ScoreTicker extends React.Component {

    constructor(props) {
        super(props);
        this.addScore = this.addScore.bind(this);
        this.subScore = this.subScore.bind(this);
        this.state = {
            score: 0,
            content: 'Move your mouse mouse wheel or trackpad or try to scroll here!'
          };
          WheelReact.config({
            up: () => {
              this.setState({
                content: 'up direction detected.',
                score: this.state.score + 1
              });
            },
            down: () => {
              this.setState({
                content: 'down direction detected.',
                score: this.state.score - 1
              });
            }
          });
        this.handleChange = this.handleChange.bind(this);
    }



    addScore(e) {
        this.props.subScore = e.target.value;
    }

    subScore(e) {
        this.props.subScore = e.target.value;
    }

    handleChange(e) {
        const val = e.target.value;
        this.props.testFunc(val);
        console.log('Testing testFunc...');
    }
    
    render () {
        return (
            <div>
                 <button {...WheelReact.events} tabIndex="1">
                    Score: {this.state.score}
                </button>

                <p>Parent State: {this.props.testVal}</p>
                Displaying score at the hole level: {this.addScore}
                <button onWheel={this.props.addScore}>+</button>
                <button onWheel={this.props.subScore}>-</button>
                <Button
                onClick={this.props.addScore}>
                </Button>
                <Button2 
                onClick={this.props.subScore}>
                </Button2>
                <button onClick={this.handleChange}>TestFunc</button>
            </div>
        );
    }
}