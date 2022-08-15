import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Change() {
  let location = useLocation()
  const naviagte = useNavigate()
  const [headline, setheadline] = useState(location?.state.item.headline)
  const [content, setcontent] = useState(location.state.item.content)
  const revise = () => {
    const AV = require('leancloud-storage');
    AV.init({
      appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
      appKey: "vky0hDUeQiaK50ay78CsgMBz",
      serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
    })
    const newBlog = AV.Object.createWithoutData('blog',location.state.item.eid)
    newBlog.set('headline',headline)
    newBlog.set('content',content)
    newBlog.save()
    const items = {headline:headline,content:content}
    naviagte('/ShowContent',{state:{item:items}})
  }

  return (
    <div>
      <p>标题</p>
      <input value={headline} onChange={e => setheadline(e.target.value)} />
      <p>内容</p>
      <textarea value={content} onChange={e => setcontent(e.target.value)}></textarea>
      <button onClick={revise}>保存</button>
    </div>
  )
}
