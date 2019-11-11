import React, { Component } from 'react'

class Title extends Component{
    render(){
        return (
            <h2 style={ {fontSize:'14px',color:'red'} }>{this.props.title}</h2>
            
        )
    }
}
export default Title