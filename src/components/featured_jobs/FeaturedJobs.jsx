import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import {useData} from '../../context/DataContext'



function FeaturedJobs() {
    const {jobsData} = useData()
    const navigate = useNavigate()


    return (
        <section>
            <div className='max-w-6xl mx-auto p-3 py-10'>
                <div className='flex items-center w-full  justify-between mb-6'>
                    <h2 className='text-2xl text-[#0F172A] font-medium'>Featured Jobs</h2>
                    <Link to='/jobs' className='text-blue-500'>View all</Link>
                </div>
                <div className=' grid md:grid-cols-2 lg:grid-cols-4 '>
                    {
                        jobsData.slice(62,66).map((item, index) => {
                            return (
                                <div key={item.id} onClick={()=> navigate(`/jobs/${item.id}`)} className='lg:w-70 w-92 border m-2 border-[#e2e8f0] hover:shadow-lg transition-all duration-300 p-4 rounded-xl flex flex-col justify-between gap-4'>
                                    <div className="flex gap-4 items-center">
                                        <img src={item.company.logo} className='h-10 w-10 object-contain' />
                                        <h2 className='font-medium text-2xl'>{item.company.id}</h2>
                                    </div>
                                    <div className='flex flex-col '>
                                        <h3 className='text-lg font-medium line-clamp-1'>{item.title}</h3>
                                        <div className='flex gap-6'>
                                            <span>{item.company.name}</span>
                                            <li className='px-0'>{`${item.location.city},${item.location.country}`}</li>
                                        </div>

                                    </div>
                                    <div className='flex gap-3'>
                                        <p className='px-3 w-fit py-2 text-gray-500 font-semibold bg-[#F8FAFC] rounded-xl'>{item.job_type}</p>
                                        <p className='px-3 w-fit py-2 text-gray-600 font-semibold bg-[#F8FAFC] rounded-xl'>{item.work_mode}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className=''>{item.dates.posted}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedJobs
