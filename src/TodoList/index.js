import React, { Component} from 'react'

import TdoHeader from "./components/TdoHeader"
import TdoInput from './components/Tdoinput'
import TdoList from "./components/TdoList"

class TodoList extends Component{
    constructor(){
        super();
        this.state={
            inputText:"adwd",
            lists:[
                {
                    content:"的味道",
                    isCompleted:false
                }
            ]
        }
    }
    render(){
        return (
            <>
                <TdoHeader
                    title="待办事列表"
                >
                    今日重点
                </TdoHeader>
                <TdoInput 
                    inputText={this.state.inputText}
                    addList={this.addList.bind(this)}
                    changeText={ this.changeText.bind(this) }
                />
                <TdoList 
                    lists = { this.state.lists }
                    delLists={ this.delLists.bind(this) }
                />
            </>
        )
    }
    changeText(value){
        // 输入数据
        this.setState({
            inputText : value
        });
        //将changeText组件的值赋给index的inputText
    }
    addList(content){
        // 增加留言
        this.setState({
            lists:[
                ...this.state.lists,
                {
                    content,
                    isCompleted:false
                }
            ],
            inputText:""
        });
    }
    delLists(index){
        let { lists } = this.state;
        lists.splice(index,1);
        this.setState({
            lists
        });
    }
}

export default TodoList;