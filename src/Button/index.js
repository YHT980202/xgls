import React, { Component } from 'react'

/* 
封装按钮：
    基本 class 定义 基础样式

    很多其他 预定义类型 表示不同状态的按钮样式
    default  蓝色 danger 红色 warning 黄色
*/
import "./index.css"
class QfButton extends Component{
    render(){
        return (
            <button className={ `qfbtn ${this.props.type}` }>
                { this.props.children }
            </button>
        )
    }
}

export default QfButton;