import React, { Component ,Fragment} from 'react'

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
        return (
            <Fragment>
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
            </Fragment>
        )
    }
    delItem(index){
        let { lists } = this.state;
        lists.splice(index,1);
        this.setState({
            lists
        })
    }
    changeText(e){
        let target = e.target; 
        //setState 第二种写法
        this.setState((prevVal,props)=>{
            console.log(prevVal);
            console.log(props)
            return {
                inputText : target.value
            }
        },()=>{
            console.log(2,this.state);
        })
        // setState 方法是异步的 

        console.log(1,this.state) //无法获取最近的state setState是异步的
    }
    addLists(){
    
        let { lists } = this.state;
        lists.push(this.state.inputText);
        this.setState({
            lists,
            inputText:""
        });
    
        console.log(this.state.lists);
    }
}

export default TodoList;