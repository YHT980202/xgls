import React, { Component } from 'react'

// 外部样式表
import "./index.css"
import { Title } from "./style"
import QfButton from "../Button"
class Content extends Component{
    render(){
        return (
          <div>
               <Title
            bbb='aaa'
           >
               我是标题
            </Title>
            <QfButton>
                千峰按钮
            </QfButton>
        </div>
        )
    }
}
export default Content