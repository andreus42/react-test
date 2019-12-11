import React from "react";
import "./App.css";
import MyComponent from "../MyComponent/MyComponent";
import { ScoreCard } from "../ScoreCard/ScoreCard";
import { Kitty } from "../Kitty/Kitty";

const styles = { display: "inline-flex"};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Nav /> */}
        <MyComponent className="MyComp" style={styles} />
      </header>
      <body className="App-body">
        {/* <p><ScoreCard course="Tully Dam" /></p> */}
        {/* <ScoreCard course="OtterBrook" /> */}
        <p><Kitty/></p>
        <p><Kitty/></p>
        <p><Kitty/></p>
        <p><Kitty/></p>
        <p><Kitty/></p>
      </body>
    </div>
  );
}

export default App;
