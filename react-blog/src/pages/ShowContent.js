import React from 'react'
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function ShowContent() {
    const navigate =useNavigate()
    let location =useLocation()
    const goback=()=>{
      navigate('/Home')
    }
    const goChange=()=>{
      navigate('/Change',{state:{item:location.state.item}})
    }
    const delt=()=>{
      const AV = require('leancloud-storage');
    AV.init({
      appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
      appKey: "vky0hDUeQiaK50ay78CsgMBz",
      serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
    });
    const todo = AV.Object.createWithoutData('blog', location.state.item.eid);
       todo.destroy();
       navigate('/Home')
    }
  return (
    <div>
            <h2>{location.state.item.headline}</h2>
            <p>{location.state.item.content}</p>
            <button onClick={goback}>返回</button>
            <button onClick={goChange}>修改</button>
            <button onClick={delt}>删除</button>
        </div>
  )
}
