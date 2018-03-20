import React, { Component } from 'react';
import Workers from './components/Workers/Workers';
import Resources from './containers/Resources';
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
      <div className="App">
        <Workers />
        <Resources />
      </div>
    );
  }
}

export default App;
