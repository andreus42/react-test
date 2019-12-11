import React from 'react';

export class Kitty extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image : "http://placekitten.com/100/100" };
        this.newKitty = this.newKitty.bind(this);
    }

    newKitty () {
        const length = Math.floor(Math.random()*300) + 50;
        const width = Math.floor(Math.random()*300) + 50;
        this.setState({image : `http://placekitten.com/${length}/${length}`})
    }


    render () {
        return (
            <div>
                <img onClick={this.newKitty} src={this.state.image} />
            </div>
        );
    }
}