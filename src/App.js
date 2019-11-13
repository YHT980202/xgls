import React,{useState,useEffect} from 'react'
import { setTimeout } from 'timers';
const App =(props)=>{
    console.log(useState(0));
    /* 
       useState()返回的一个数组
       数组的第0是状态图  就是一个值
       数组第1是一个改变这个状态的函数，useState调用时 可以穿参，参数就是第0个状态的初始值
    */

    const [num,setNum] = useState(0);
    //num 是变量名  是随便取的  setNum  是值  也是函数
    const [title,setTile] = useState("我是标题");
    const ajax=()=>{
        setTimeout(() => {
            setNum(100);
            //数据过来的时候此时可以给setNum赋值
        }, 1000);
    }
    useEffect(() => {
     // useEffect就相当于一个回调函数 
     //相当于生命周期中的componentDidMount 和 componentDidUpdate 就是数据更新和自执行函数
        console.log(111);
        document.title = num;
        ajax();
    });
    return (
        <div>
           <h2>{title}</h2>
           <button onClick={ ()=>setNum(num+1)}>+</button>
           {num}
           <button onClick={ () =>setNum(num-1)}>-</button>
        </div>
    )
}

export default App;