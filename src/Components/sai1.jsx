import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const sai1 = () => {
  const Data=[
    {
      path:"/images/sai2",
      name:"sai2"
    },
    {
      path:"/images/sai3",
      name:"sai3"
    }
  ]
  return (
    <div>
      {
        Data.map((item,index)=>(
          <NavLink to={item.path} key={index}>
            <div>{item.name}</div>
          </NavLink>
        ))
      }
      <div style={{color:"red"}}><Outlet/></div>
    </div>
  )
}

export default sai1