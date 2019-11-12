import React, { Component } from 'react'
import TodoList from "./TodoList"

class App extends Component {
    render() {
        return(
            <div>
                <TodoList
                    a="123"
                    b="aaa"
                />
            </div>
        )
    }
}
export default App;