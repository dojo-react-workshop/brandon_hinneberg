import React, { Component } from 'react';
import MyForm from './Myform.js';
import Title from './title';

class App extends Component {
    state{
        project: null,
        description: null,
        minutes: null
    }

    handleChange=(event)=>{
        const {value, name} = event.target;



        this.setState({
            [name]: value,
            [name]: value;
        });
    }

    handleSubmit=(event)=>{
        event.preventDeault();
        console.log('you submitted the form');
    }

  render() {
    return (
      <div>
        <Title/>
        <MyForm 
          data={this.state} 
          onSubmit={this.handleSubmit} 
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
