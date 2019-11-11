import React from 'react'
import ReactDOM from 'react-dom'

//calss 组件 类组件

class App extends React.Component{
    render(){
        console.log(this);
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.content}</h2>
            </div>
        )
    }
}
ReactDOM.render(
    <App 
        title="我是标题"
        content="我是内容"
    />,
    document.querySelector("#root")
)