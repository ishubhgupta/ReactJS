// App.js
import React from "react";
import "./App.css";
import Shubh from "./components/Shubh";
import Sheader from "./components/Sheader";

function App() {
  const person = {
    name: "Shubh Gupta",
    message: "Chim damak dam dam",
    seatNumber: [2, 3, 4]
  
  }
  return (
    <div className="App">
      <Shubh name = {person.name} message={person.message} seatNumber = {person.seatNumber} />
      {/* <Sheader /> */}
    </div>
  );
}

export default App;
