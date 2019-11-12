import React, { Component } from 'react'

class TodoList extends Component{
    constructor(){
        super(); //固定写法
        // 定义内部状态
        this.state={  //相当于 vue中的data  内部状态 本组件的数据
            inputText:"",
            lists:[]
        }
        this.addLists = this.addLists.bind(this);
    }
    render(){
        return (
            <div className="todolist">
                <div className="header">
                    <input value={this.state.inputText} onChange={this.changeText.bind(this)}/>
                    <button onClick={this.addLists}>增加备忘录</button>
                </div>
                <hr />
                <ul className="lists">
                  
                   {
                       this.state.lists.map((el,index)=>{
                           return (
                               <li key={index}>
                                 {el}
                                 <button onClick={this.delItem.bind(this,index)}>X</button>
                                </li>
                           );
                       })
                   }
                </ul>
            </div>
        )
    }
    delItem(index){
        // 删除功能
        let { lists } = this.state;
        lists.splice(index,1);
        this.setState({
            lists
        })
    }
    changeText(e){
        // 获取 我输入数据 调用 this.setState改变数据 事件源.value
        let target = e.target; //事件源获取
       // console.log(target.value);
        this.setState({
            inputText : target.value
        });
    }
    addLists(){
        // 添加留言
        //console.log( this.state.inputText );
      /*   this.setState({
            lists:[
                ...this.lists,
                this.state.inputText
            ]
        }); */
        let { lists } = this.state;
        lists.push(this.state.inputText);
        this.setState({
            lists,
            inputText:""
        });
    
        console.log(this.state.lists);
    }
    // fn(){
    //     // this.state.inputText = "111"; 错误的 react 数据state不是双向绑定 单向数据流 this.setState()
    //     this.setState({
    //         inputText:"111"
    //     });
    //     console.log(this);
    // }
}

export default TodoList;