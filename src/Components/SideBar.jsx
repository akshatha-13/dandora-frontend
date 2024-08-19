import React from 'react'
import {BsArrowLeftShort, BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'
import {AiOutlineSound,AiOutlineFileText, AiOutlineBarChart, AiOutlineMail, AiOutlineSetting, AiOutlineLogout} from "react-icons/ai"
import {RiDashboardFill} from "react-icons/ri"
import { useState } from 'react'

export const SideBar=()=>{
  const [open,setOpen]=useState(true);
  const  Menus=[
    {title:"Dashboard"},
    {title:"Pages",icon:<AiOutlineFileText/>},
    {title:"Media",icon:<BsFillImageFill/>},
    {title:"Projects",icon:<BsReverseLayoutTextSidebarReverse/>},
    {title:"Analytics",icon:<AiOutlineBarChart/>},
    {title:"Inbox",icon:<AiOutlineMail/>},
    {title:"Profile",icon:<BsPerson/>},
    {title:"Setting",icon:<AiOutlineSetting/>},
    {title:"Logout",icon:<AiOutlineLogout/>},
  ]
  return (
    <div className='flex'>
       <div className={`bg-dark-purple h-screen p-5 pt-8 ${open? "w-60" : "w-20"} duration-300 relative`}>
         <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>

          <div className='inline-flex mb-10'>
            <AiOutlineSound className={`bg-amber-300 text-4xl rounded cursor-pointer block float mr-5 duration-500 ${open && "rotate-[360deg]"}`}/>
           <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}> DONDORA</h1>
          </div>
          
          <ul className='pt-2'>
            {Menus.map((menu,index)=>(
              <>
              <li key={index} className="text-gray-300 text-sm flex items-center cursor-pointer p-2 hover:bg-gray-500 rounded-md ">
                <span className='text-2xl block float-left'>{menu.icon?menu.icon:<RiDashboardFill/>}</span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
              </li>
              </>
            ))}
          </ul>
       </div>
    </div>
  )
}

