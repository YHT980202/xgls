import React, { Component } from 'react'

class TdoListContent extends Component {
    constructor() {
        super();
        this.state = {
            content: {}
        }
    }
    render() {
        console.log(11);
        return (
            <div> 
                {this.state.content} 
                { this.state.content.isCompleted?"完成":"未完成" }
                <button onClick={this.delList.bind(this)}>X</button>
            </div>
        )
    }
    delList() {
        this.props.delLists(this.props._index);
    }
    static getDerivedStateFromProps(props, state) {
        if (props.content !== state.content) {
            return {
                content: props.content
            }
        }
        return null
    }
    shouldComponentUpdate(prvProps, nowProps) {
        if (prvProps.content === nowProps.content) {
            return false;
        } else {
            return true;
        }
    }
}


export default TdoListContent;