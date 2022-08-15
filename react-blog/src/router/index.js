import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ShowContent  from '../pages/ShowContent'
import NewBuild from '../pages/NewBuild'
import Change from '../pages/Change'
import Reviser from '../pages/Reviser'


const router=  [
    {
        path:'/Home',
        element:<Home/>
    },
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/ShowContent',
        element:<ShowContent/>
    },
    {
        path:'/NewBuild',
        element:<NewBuild/>
    },
    {
        path:'/Change',
        element:<Change/>
    },
    {
        path:'/Reviser',
        element:<Reviser/>
    }
]
export default router
