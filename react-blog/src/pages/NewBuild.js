import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NewBuild() {
  const [headline,setheadline] = useState('')
  const [content,setcontent] = useState('')
  const navigate = useNavigate()
  function goHome() {
    
    const AV = require('leancloud-storage');
    AV.init({
      appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
      appKey: "vky0hDUeQiaK50ay78CsgMBz",
      serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
    });
    const blog=AV.Object.extend('blog');
    const bblog= new blog();
    bblog.set('headline',headline);
    bblog.set('content',content);
    bblog.save().then(function(){
      console.log('保存成功',headline,content)
      navigate('/Home')
    })
  }
  return (
    <div>
      <span>标题</span><input onChange={e=>setheadline(e.target.value)}/>
      <p>内容</p><textarea onChange={e=>setcontent(e.target.value)}></textarea>
      <button onClick={goHome}>发布</button>
    </div>
  )
}
