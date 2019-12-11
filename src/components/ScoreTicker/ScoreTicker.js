import React from 'react';
import { Button } from '../Button/Button';
import { Button2 } from '../Button2/Button2';

const styles = {
    display: 'inline-flex',
    backgroundColor: '#3d6ed1',
    color: 'red',
    fontSize: 20,
    fontFamily: 'Arial',
    border: 10,
    boarderRadius: '100%',
    margin: 10
  }


export class ScoreTicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }

    handleClick() {
        this.setState({score: this.state.score + 1});
    }

    handleClick2() {
        this.setState({score: this.state.score -1});
    }

    handleClick3(e) {
        const score = e.target.value;
        this.props.onClick(score);
    }

    handleClick4(e) {
        const score = e.target.value;
        this.props.onClick(score);
    }

    render () {
        return (
            <div>
                <Button style={styles}
                onClick={this.handleClick}>
                </Button>
                <Button2 style={styles} 
                onClick={this.handleClick2}>
                </Button2>
                {/* <button onClick={this.handleClick3}>Up</button>
                <button onClick={this.handleClick4}>Down</button> */}
                
            </div>
        );
    }
}