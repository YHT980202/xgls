import React, { Component , Fragment } from 'react'

class TdoHeader extends Component{
    constructor(){
        super();
        this.state = {
            html:`
            <div>
             <p>小姑娘</p>
             </div>
            `
        }
    }
    render(){
        return (
            <Fragment>
            <div 
               dangerouslySetInnerHTML={{__html:this.state.html}}
             ></div>
                <h1>{this.props.title}</h1>
                <p>{ this.props.children }</p>
            </Fragment> 
        )
    }
}

export default TdoHeader;