import React, {Component} from 'react'
import logo from './logo.svg'
import './index.css'
import StopWatch from './stopwatch'
import Timer from './timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className='head-text-info'>Welcome to Saidul Timezon Pro*</h2>
        </div>
        <p className="App-intro">
        Time you enjoy wasting is not wasted time! 🕙
        </p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{marginRight: 40}}>
            <h3 className='set-me'>Stopwatch</h3>
            <StopWatch />
          </div>
          <div style={{marginLeft: 40}}>
            <h3 className='set-me'>Countdown Timer</h3>
            <Timer /> 
          </div>
        </div>
      </div>
    )
  }
}

export default App
