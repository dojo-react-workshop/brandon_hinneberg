import React, { Component } from 'react';

class JSLibrary extends Component {
    render(){
        const JSLibraryStyle = {
            display: 'inline-block',
            width: 500,
            height: 200,
            boarder: '6 ' //How to do this? with multiple properties

        }
        return(
        <section style={JSLibraryStyle} className='JSLibrary'>
        {console.log(this.props.libarary)}
        
        </section>
        );
    }
}

export default JSLibrary;