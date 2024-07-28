// App.js
import React from "react";
import "./App.css";
import Shubh from "./components/Shubh";
import Sheader from "./components/Sheader";

function App() {
  return (
    <div className="App">
      <Shubh name="AK" message="How are You??"/>
      <Shubh name="SY" message="Are u fine?"/>
      {/* <Sheader /> */}
    </div>
  );
}

export default App;
