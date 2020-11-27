import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      let strTime = hours + ":" + minutes + ":" + seconds +" "+ ampm;
    this.state = { time: strTime };
  }
  componentDidMount() {
    console.log("didMount");
    this.intId = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      let strTime = hours + ":" + minutes + ":" + seconds +" "+ ampm;
      
      this.setState({ time: strTime });
    }, 1000);
  }

  
  componentWillUnmount() {
    
    clearInterval(this.intId);
  }
  render() {
    return (
      <div className="App">
        <div className="Clock">
          <h3 id="time">{`${this.state.time}`}</h3>
        </div>
      </div>
    );
  }
}

export default App;
