import React from 'react'
import { MdArrowForward, MdLockOutline, MdLogout, MdModeEditOutline, MdOutlineSettings } from 'react-icons/md'
import { Link } from 'react-router-dom';

type Users = {
    open: number;
    setOpen: any;
}

export const Menu = (users: Users) => {
   const {open, setOpen} = users;
    
  return (
    <>
    
    <div className={`bg-gray-300 w-1/6 p-4 fixed right-4 rounded-xl mt-4 ${open ? 'translate-x-0' : 'translate-x-30'}`} >
       <li className='flex   gap-4 mt-6'>
        <span><MdModeEditOutline size={20} className="text-blue-500 hover:cursor-pointer" />  </span>
       
       <span>Ver perfil</span>
       </li> 

       <li className='flex  gap-4 mt-8'>
        <span><MdLockOutline size={20} className="text-blue-500 hover:cursor-pointer"/></span>
       <span>Cambiar contraseña</span>
       </li>
       
       <li className='flex  gap-4 mt-8'>
        <span><MdOutlineSettings size={20} className="text-blue-500 hover:cursor-pointer"/></span>
       <span>Ajustes</span>
       </li> 

       <li className='flex items-center justify-between mt-8'>
       <Link to={"/sesion"}>
        <span><MdLogout size={20} className="text-red-500 hover:cursor-pointer"/></span>
        </Link>
       <span className="text-red-500">cerrar ses&iacute;on</span>
       <span><MdArrowForward size={20} className="text-red-500 hover:cursor-pointer" 
        onClick={() => setOpen(0)}/></span>
       </li> 
        
    </div>

    </>
  )
}






    