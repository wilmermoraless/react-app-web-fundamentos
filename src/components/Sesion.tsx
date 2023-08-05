import React from 'react'

type Props = {}

export const Sesion = (props: Props) => {
  return (
    <><main className='bg-blue-300 p-8'>
    <div className='flex flex-col gap-4  bg-white w-1/5 mr-auto ml-auto p-4 border-2 border-gray-200 rounded-lg'>
        <h2 className='font-bold  text-center'>Sign In</h2>
        <span className='font-bold'>Email addres</span>
        <input type="text" className='border-2 border-gray-400 pl-2' placeholder='Enter email'/>
        <span className='font-bold'>Password</span>
        <input type="password"  className='border-2 border-gray-400 pl-2' placeholder='Enter password'/>

    <div>
        <input type="checkbox" className='mr-4'/> 
        <label htmlFor="" className='font-bold'>remeber me</label>
    </div>
       
        <button className='w-50 bg-blue-400 rounded text-white p-2'>Submit</button>
        <span className='text-right text-sm'>forgot password?</span>
    </div>
    </main>
    </>
  )
}