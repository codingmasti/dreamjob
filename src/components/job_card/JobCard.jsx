import React from 'react'
import { FiBookmark } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function JobCard({job}) {
     const navigate = useNavigate()
    return (
        <div 
        onClick={()=> navigate(`/jobs/${job.id}`)}
        className='h-33 border m-2 lg:m-4 border-[#e2e8f0] items-start flex rounded-lg'>
            <div className='lg:h-25 lg:w-25 w-[15%] m-2 lg:ml-5'>
                <img src={job.company.logo} alt="" 
                className='w-full h-full object-contain'/>
                {/* <p>{job.salary.display}</p> */}
            </div>
            <div className='w-[75%] h-27 flex flex-col justify-between  lg:mx-10'>
                <div className='w-full flex items-center justify-between'>
                    <h3 className=' text-md lg:text-lg font-semibold'>{job.title}</h3>
                    <p><FiBookmark /></p>
                </div>
                <div className='lg:flex gap-7 hidden'>
                    <h3>{job.company.name}</h3>
                    <li>{job.location.city}</li>
                    <h3>{job.id}</h3>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex lg:w-50 h-17 flex-col justify-between'>
                        <p className='px-3 py-1 text-[#0F172A] w-fit font-semibold bg-[#F8FAFC]  rounded-lg'>{job.job_type}</p>
                        <p className='px-3 py-1 text-[#0F172A] w-fit font-semibold bg-[#F8FAFC] rounded-lg'>{job.work_mode}</p>
                    </div>
                    <div className='w-60 hidden lg:flex'>
                        <p>{job.salary.display}</p>
                    </div>
                    <div className='w-30 flex flex-col justify-end text-sm'>
                        <p className='line-clamp-1 lg:hidden'>{job.salary.display}</p>
                        <p>{job.dates.posted}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
