// 将dom 渲染到 html上  挂载react
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'


ReactDom.render(<App 
     title="我是传入的数据"
/>,document.querySelector("#root"));