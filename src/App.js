import React, { Component } from 'react'
import Title from "./Title"
import Content from "./Content"

class App extends Component{
    render(){
        return (
            <div>
                <Title
                    title="我是父组件传过来的标题"
                />
                <Content
                    content="我是父组件传过来的内容"
                />
            </div>
        )
    }
}

export default App;
