import React from "react";

export class Hole extends React.Component {
  render() {
    return (

      <div style={styles}>
        Hole {this.props.holeNum}: Score: {this.props.holeScore}
        {/* <button onClick={this.props.onClickUp}>+</button> */}
        {/* <button onClick={this.props.onClickDown}>-</button> */}
      </div>
    );
  }
}



const styles = {
    display: "inline-flex",
    backgroundColor: "#3d6ed1",
    color: "red",
    fontSize: 25,
    fontFamily: "Arial",
  //   margin: 10
  };