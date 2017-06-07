import React, {Component} from 'react';

export default class MyFormStateWay extends Component{
    state = {
        name: '',
        description:''
    }
    handleChange = (event)=>{
        //const value = event. target.value;
        //const name = event.target.name;
        const {value, name} = event.target; // Same thing as the previous two lines

        this.stateState({
            [name]:value //square bracket changes it from a property to be treated as a variable 
        });
    }


    handleSubmit=(event)=>{
        event.preventDefault(); // this prevents the page from reloading as it typically does when the submit form is clicked
        console.log('You submitted: ', this.state)
    }


    render(){
        return(

            <form onSubmit ={this.handleSubmit}>
                Name: <input onChange ={this.handleChange} type='text' value={this.state.name} name = 'name'/>
                Description: <textarea onChange={this.handleChange} value= {this.state.description} name ='description' id='' cols = '30' rows = '15'></textarea>
                <input type = 'submit'/>
               
            </form>

        );
    }
}


// this route is not reccomended especially when you want to do form validation 
class MyFormRefsWay extends Component{
    state = {
        name: '',
        description:''
    }

    handleSubmit=(event)=>{
        event.preventDefault(); // this prevents the page from reloading as it typically does when the submit form is clicked
        console.log('You submitted: ', this.state)
    }


    render(){
        return(

            <form onSubmit ={this.handleSubmit}>
                Name:<input type= 'text' ref={(input)=> {this.input = input}}/>
                Description: <textarea ref={(ta)=> {this.ta = ta }}></textarea>
                <input type = 'submit'/>
               
            </form>

        );
    }
}