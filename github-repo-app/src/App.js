import React, { Component } from 'react';
import UserForm from './UserForm'
class App extends Component {
    render() {
        return(
          <div className='App'>
          <h1>GitHub App</h1>
            <UserForm/>
          </div>
        )
    }
}
export default App;