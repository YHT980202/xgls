import React, { Component , Fragment } from 'react'

class TdoInput extends Component{
    render(){
        return (
            <Fragment>
                <input value={this.props.inputText} onChange={this.changeText.bind(this)}/>
                <button onClick={ this.add_list.bind(this) }>增加</button>
            </Fragment> 
        )
    }
    add_list(){
        this.props.addList(this.props.inputText);
    }
    changeText(e){
        let target = e.target;
        this.props.changeText(target.value);
    }
}

export default TdoInput;