import React, { Component } from 'react';
import Title from './components/title';
import Ballet from './components/ballet';

class App extends Component {
  render() {
    const appStyle ={
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: 750

    }
    return (
      <div className="App" style={appStyle}>
        <Title/>
        <Ballet/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
