import React, { Component,Fragment } from 'react'

class TodoList extends Component{
    constructor(){
        super();
        this.state={
            inputText:"",
            lists:[]
        }
        this.addLists = this.addLists.bind(this);
    }
    render(){
        return(
            <Fragment>
                <div className="header">
                      <input value={this.state.inputText} onChange={this.changeText.bind(this)}></input>
                      <button onClick={this.addLists}>增加备忘录</button>
                </div>
                <hr></hr>
                <ul className="lists">
                    {
                        this.state.lists.map((el,index)=>{
                            return (
                                <li key={index}>
                                    {el}
                                    <button onClick={this.delItem.bind(this,index)}>S</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </Fragment>
        )
    }


    delItem(index){
        let {lists} =this.state;
        lists.splice(index,1);
        this.setState({
            lists
        })
    }
    changeText(e){
        let target = e.target;
        this.setState((prevVal,props)=>{
            console.log(prevVal);//现在的state的值
            console.log(props);//父组件传过来的值
            return {
                inputText:target.value
            }
        },()=>{
            console.log(2,this.state);//现在的state的值
        })
        console.log(1,this.state)//无法获取最近的state setState是异步的
    }
    addLists(){
        let {lists} = this.state;
        lists.push(this.state.inputText);
        this.setState({
            lists,
            inputText:""
        });
        console.log(this.state.lists)
    }
}
export default TodoList;


