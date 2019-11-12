import React, { Component } from 'react'

import TodoList from "./TodoList"

class App extends Component{
   
    render(){
        return (
         <>
            <TodoList
                a="123"
                b="aaa"
            />
        </>
        )
    }
}

export default App;