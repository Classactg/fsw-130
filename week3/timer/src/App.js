import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"
import {start, stop} from "./redux"

function App(props) {
  var[laps, setLaps] = useState([])
  var[hours, setHours] = useState(0);
  var[minutes, setMinutes] = useState(0);
  var[seconds, setSeconds] = useState(0);
  var[miliseconds, setMiliseconds] = useState(0);
  
  const start=()=>{
    setInterval(() => {
      props.start();
    }, 1); //RUNS EVERY MILISECOND
  }

  return (
    <div className="App">
      <span>hr{props.hours}</span>
      <span>min{props.minutes}</span>
      <span>sec{props.seconds}</span>
      <span>milsecs{props.miliseconds}</span>
      <button onClick={start}>START</button>
      <button onClick={props.stop}>STOP</button>
      {/* <button onClick={props.reset}>RESET</button> */}
      <button onClick={props.lap}>LAP</button>
  <p>Laps{
    laps.map(lap => {
      return (
      <span>{lap}</span>
      )
    })
    }</p>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     miliseconds: state.miliseconds,
//     seconds: state.seconds,
//     minutes: state.minutes
//   }
// }



export default connect(state => ({
  miliseconds: state.miliseconds,
  seconds: state.seconds,
  minutes: state.minutes, hours: state.hours}), {start, stop})(App)
