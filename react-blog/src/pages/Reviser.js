import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Reviser() {
    const [username, setuser] = useState('')
    const [passward, setpassward] = useState('')
    const navigate = useNavigate()
    function Freviser() {
        if (username === '' || passward === '') {
            alert('用户名或密码不能为空！')
        } else {
            const AV = require('leancloud-storage');
            AV.init({
                appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
                appKey: "vky0hDUeQiaK50ay78CsgMBz",
                serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
            });
            const user = AV.Object.extend('blog_user');
            const nuser = new user();
            nuser.set('username', username);
            nuser.set('password', passward);
            nuser.set('islogin', false);
            nuser.save().then(function () {
                console.log('注册成功', username, passward)
                navigate('/')
            })
        }
    }
    return (
        <div>
            <input onChange={e => setuser(e.target.value)} placeholder='用户名'/>
            <br />
            <input onChange={e => setpassward(e.target.value)} placeholder='密码'/>
            <br />
            <button onClick={Freviser}>注册</button>
        </div>
    )
}
