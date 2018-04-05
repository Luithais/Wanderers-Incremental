import React, { Component } from 'react';
import Workers from './components/Workers/Workers';
import Resources from './containers/Resources';
import GameLoop from './containers/GameLoop';
import { Loop, Stage } from 'react-game-kit';
import './App.css';

class App extends Component {
  
  goldChangedHandler = (event) => {
    this.setState( {
      resources: [
        { type:"Gold", count: event.target.value },
      ]
    } )
  }

  render() {
    return (
      <Loop>
 
          <div className="App">
            <Resources />
          </div>

      </Loop>
    );
  }
  
}

export default App;
