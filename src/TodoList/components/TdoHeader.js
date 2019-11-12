import React, { Component , Fragment } from 'react'

class TdoHeader extends Component{
    render(){
        return (
            <Fragment>
                <h1>{this.props.title}</h1>
                <p>{ this.props.children }</p>
            </Fragment> 
        )
    }
}

export default TdoHeader;