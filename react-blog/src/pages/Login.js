import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const [isLogined, setLogined] = useState(false)
    const [username, checkuser] = useState('')
    const [passward , checkpassward] = useState('')
    function Slogin() {
        const AV = require('leancloud-storage');
        AV.init({
            appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
            appKey: "vky0hDUeQiaK50ay78CsgMBz",
            serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        })
        const query=new AV.Query('blog_user')
        query.equalTo('username',username)
        query.find().then((user)=>{
            console.log(user[0].attributes)
            if(user[0].attributes.password===passward){
                const setuser = AV.Object.createWithoutData('blog_user',user[0].id)
                setuser.set('islogin',true)
                setuser.save()
                navigate('/Home')
            }else{
                alert('用户名或密码不正确')
            }
        })
        
    }
    function Reviser(){
        navigate('/Reviser')
    }
    return (
        <div>
            <input onChange={e=>checkuser(e.target.value)} placeholder='用户名'/>
            <br />
            <input onChange={e=>checkpassward(e.target.value)} placeholder='密码'/>
            <br />
            <button onClick={Slogin}>登录</button>
            <button onClick={Reviser}>注册</button>
        </div>
    )
}

export default Login