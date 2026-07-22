import { House } from 'lucide-react'
import React from 'react'

function Dashbord() {
  return (
    <div className='max-w-6xl my-10 mx-auto flex justify-between h-[80vh]'>
      <div className='w-[25%] rounded-lg h-full shadow-lg'>
       <div className='flex w-[90%] gap-4 text-xl'>
        <House />
        <p>Dashbord</p>
       </div>
      </div>
      <div className='w-[73%] rounded-lg h-full shadow-lg'>

      </div>
    </div>
  )
}

export default Dashbord
