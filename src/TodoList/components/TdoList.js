import React, { Component } from 'react'

class TdoList extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.lists.map((el,index)=>{
                        return (
                            <li key={index}>
                                {el.content} 

                                <span style={{color:'red',fontSize:'12px'}}>{ el.isCompleted?'完成':'未完成' }</span>
                                <button onClick={ ()=>{ this.props.delLists(index) } }>X</button>
                            </li>
                        )
                    })
                }
               
              
            </ul> 
        )
    }
}

export default TdoList;