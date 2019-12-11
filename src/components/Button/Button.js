import React from 'react';

const styles = {
    display: 'inline-flex',
    backgroundColor: 'rgb(49, 128, 95)',
    color: 'orange',
    fontSize: 25,
    fontFamily: 'Arial',
    boarderRadius: '100%'
  }

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Plus' };
    }
    
    handleClick() {
        this.setState( { name: 'clicked-button'} );
    }

	render() {
		return (
			<button style={styles} onClick={this.props.onClick}>+</button>
		);
	}
}