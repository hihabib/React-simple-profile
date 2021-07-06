import React, { Component } from 'react'


class Links extends Component {
    render() { 
        return ( 
            <a style={{color: '#333399', marginRight: 50, fontWeight: 'bold'}} href={this.props.link}>{this.props.children}</a>
         );
    }
}
 
export default Links;