import React,{useState} from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { NavLink } from 'react-router-dom';
import Logo from '../logo.svg'


const Sidebar = ({children}) => {
   const [isopen,setIsopen]=useState(false);
    const toggle=()=>setIsopen(!isopen);
  const SidebarData=[
    {
       title:"Home",
       icon:<HomeIcon/>,
       path:"/"
    },
    {
        title:"Mailbox",
        icon:<MailIcon/>,
        path:"/mailbox"
     },
     {
        title:"Analytics",
        icon:<AssessmentIcon/>,
        path:"/analytics"
     },
     {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        path:"/dashboard"
     },
     {
        title:"Friends",
        icon:<GroupIcon/>,
        path:"/friends"
     },
     {
        title:"Images",
        icon:<PermMediaIcon/>,
        path:"/images",
     }
]
  return (
    <div className='con1'>
      <div className='kk'>
      <div className='sidebar'>
         <div className='open' onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
         </div>
         <div className='Sidebar-1' style={{width:isopen?"260px":"",transition:isopen?"0.5s":"0.5s"}}>
            <div className='logocontainer' >
               <div className='IMG'><img src={Logo} alt='' /></div>
               <h5>Night Vampier</h5>
            </div>
            <div className='dash'></div>
            <ul className='Sidebarlist'>
               {
                  SidebarData.map((val,key)=>{
                     return <NavLink key={key} 
                     className='row'
                     to={val.path}
                     >
                        <div className='link'>
                           <div className='icon'>{val.icon}</div>
                           <div className='title'>{val.title}</div>
                        </div>
                     </NavLink>
                  })
               }
            </ul>
         </div>
         </div>
         <div>
         <div className='Sidebar-2' style={{marginLeft:isopen?"":"-260px"}}>
            <div className='logocontainer'>
               <div className='IMG'><img src={Logo} alt='' /></div>
               <h5>Night Vampier</h5>
            </div>
            <div className='dash'></div>
            <ul className='Sidebarlist'>
               {
                  SidebarData.map((val,key)=>{
                     return <NavLink key={key} 
                     className='row'
                     id="active"
                     to={val.path}
                     >
                        <div className='link'>
                           <div className='icon'>{val.icon}</div>
                           <div className='title'>{val.title}</div>
                        </div>
                     </NavLink>
                  })
               }
            </ul>
         </div>
         </div>
      </div>
         <div className=' container-fluid '>
            <div className='toggle-2' onClick={toggle}>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <div  fluid="true" className='main'>{children}</div>
         </div>
   </div>
  )
}

export default Sidebar