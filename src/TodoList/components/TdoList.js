import React, { Component } from 'react'

import PropTypes from 'prop-types'
import TdoListContent from "./TdoListContent"

class TdoList extends Component{
    static defaultProps={
        lists:[
            {
                content:"1111",
                isCompleted:true
            }
        ]
    }
    static propTypes = {
        lists:PropTypes.array
    }
    render(){
        return (
            <ul>
                {
                    this.props.lists.map((el,index)=>{
                        return (
                            <TdoListContent key={index}>
                               content={el}
                               _index={index}
                               delLists={ this.props.delLists}
                            </TdoListContent>
                        )
                    })
                }
               
              
            </ul> 
        )
    }
}

/* TdoList.defaultProps={
    lists:[
        {
            content:"1111",
            isCompleted:true
        }
    ]
} */

export default TdoList;