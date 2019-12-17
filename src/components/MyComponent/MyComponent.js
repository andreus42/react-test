import React from "react";
import "./MyComponent.css";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Andrew "};
  }

  render() {
    return (
      <div className="MyComponent">
        {/* <img src="http://placekitten.com/250/250" />
        <h1>Andrew hearts Tracy</h1>
        <img src="http://placekitten.com/200/200" /> */}
        <img src="http://placekitten.com/100/100" alt="A cuddly kitty"/>
        <h1>{this.state.name}'s ScoreCards</h1>
      </div>
    );
  }
}

export default MyComponent;
