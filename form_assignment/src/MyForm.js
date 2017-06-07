import React, {Component} from 'react';

export default class MyForm extends Component{



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Project: 
                    <input
                        list='formListData'
                        name='project'
                        value ={this.state.project}
                        onChange={this.handleChange}/>
                    <datalist id='formListData'>
                        <option value = 'Personal'/>
                        <option value = 'Work'/>
                        <option value = 'Freelance'/>
                    </datalist>
                Description: 
                    <input 
                        type = 'text' 
                        name ='description'
                        value = {this.state.description}
                        onChange={this.handleChange}/>
                Minutes: 
                <input 
                    name ='minutes'
                    value ={this.state.minutes}
                    type ='text'
                    onChange={this.handleChange}
                    />
            </form>
        );
    }
}