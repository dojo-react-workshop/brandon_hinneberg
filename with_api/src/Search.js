import React, {Component} from 'react';
import {getResposByUserName} from './apiHelpers';


class  Search extends Component{
    state = {
        username:''
    }

    handleChange = (event)=>{
        this.setState({
            username:event.target.value
        });
    }

    handleClick=()=>{
        getResposByUserName(this.state.username)
            .then(this.props.handleSearch)
            //.then((repos)=> this.props.handleSearch(response.))     // ->same this as previous line 
    }


    render(){
        return(
         <div>
            <input 
                type='text' 
                value={this.state.username}
                onChange={this.handleChange}
                />
            <button onClick={getResposByUserName}>Search</button>
        </div>
    );
    }
}