import React from 'react'
import ReactDom from "react-dom"
import App from "./App"


ReactDom.render(
    <App 
        title="我是标题"
        content="我是内容"
    />,
    document.querySelector("#root")
);