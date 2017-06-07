import React, { Component } from 'react';
import JSLibrary from './jsLibraryBlock';
import libraries from '../resources/data';

class Ballet extends Component {
    render(){
        let BalletStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'green',
            width: 750


        }
        return(
            <section style={BalletStyle} className='Ballet'>
                <JSLibrary library ={libraries.React}/>
                <JSLibrary library ={libraries.Vue}/>
                <JSLibrary libarary ={libraries.Angular}/>
                <JSLibrary library ={libraries.Ember}/>
            </section>
        );
    }
}

export default Ballet;