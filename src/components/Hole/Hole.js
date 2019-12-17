import React from "react";

export class Hole extends React.Component {

  render() {
    return (

      <div>
        {/* Hole {this.props.count}: Score: {this.props} */}
        <button onClick={this.props.onClickUp}>+</button>
        <button onClick={this.props.onClickDown}>-</button>
      </div>
    );
  }
}