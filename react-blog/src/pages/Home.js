
import React from 'react'
import { useEffect } from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import { useState ,useLayoutEffect} from 'react'
import './Home.css'

function Home() {
    
    const [list , setList] = useState([])
    const navigate = useNavigate()
    useLayoutEffect(()=>{
        const AV=require('leancloud-storage')
        AV.init({
            appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
            appKey: "vky0hDUeQiaK50ay78CsgMBz",
            serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        })
        const query=new AV.Query('blog')
        query.lessThan('id',300)
        query.find().then((blogs)=>{
            const list1 =[]
            for(var i=0;i<blogs.length;i++){
                var newContent = {id:blogs[i].attributes.id,content:blogs[i].attributes.content,headline:blogs[i].attributes.headline,eid:blogs[i].id}
                list1.push(newContent)
            }
            console.log(list1)
            setList(list1)
        })
    },[])
       function NewBuild(){
        navigate('/NewBuild')
        }

        function Showcontent(blogs){
            
            navigate('/ShowContent',{state:{item:blogs}})
        }
        return(
            <div>
                <ul>
                {list.map((blogs,index)=>{
                     return <div key={index} className='homeContent'onClick={()=>Showcontent(blogs)}>{blogs.headline}</div>
                }
                    
                )}
                </ul>
                <button onClick={NewBuild}>新建</button>
            </div>
        )
            }


export default Home