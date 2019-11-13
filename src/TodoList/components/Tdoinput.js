import React, { Component , Fragment,createRef } from 'react'

class TdoInput extends Component{
    constructor(){
        super();
        this.txtInput = createRef();
    }
    render(){
        return (
            <Fragment>
               <label htmlFor="#txt">请输入备忘录事件</label>
               {/* <input id="txt" ref={ this.txtInput  } className="textInput" value={this.props.inputText} 
               onKeyUp={ this.handlerKeyDown.bind(this) } onChange={this.changeText.bind(this)}/> */}
                {/* <input ref={ (txtInput)=> this.txtInput = txtInput  } className="textInput" value={this.props.inputText} 
                onKeyUp={ this.handlerKeyDown.bind(this) } onChange={this.changeText.bind(this)}/> */}
               <input id="txt" ref={ this.txtInput} className="textInput" value={this.props.inputText}
               onKeyUp={ this.handlerKeyDown.bind(this)} onChange={this.changeText.bind(this)} ></input>
                <input value={this.props.inputText} onChange={this.changeText.bind(this)}/>
                <button onClick={ this.add_list.bind(this) }>增加</button>
            </Fragment> 
        )
    }
    componentDidMount(){
        //dom已经渲染
        this.txtInput.current.focus();
    }
    handlerKeyDown(e){
        let code = e.keyCode;
        code === 13&&this.add_list();
    }
    add_list(){
        this.props.addList(this.props.inputText);
        //此时value的值是=this.Props.inputText的值 也就是进行绑定 再将这个inputText的值传给父组件的addList方法
    }
    changeText(e){
        let target = e.target;
        this.props.changeText(target.value);
    }
}

export default TdoInput;