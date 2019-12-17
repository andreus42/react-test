import React from "react";
import "./App.css";
import MyComponent from "../MyComponent/MyComponent";
import { ScoreCard } from "../ScoreCard/ScoreCard";
// import { Kitty } from "../Kitty/Kitty";

const styles = { display: "inline-flex" };

function App() {
  return (
      <div className="App-body">
        <header className="App-header">
          <MyComponent className="MyComp" style={styles} />
        </header>
        <ScoreCard course="Tully Dam" />
        {/* <ScoreCard course="OtterBrook" /> */}
      </div>
  );
}

export default App;
