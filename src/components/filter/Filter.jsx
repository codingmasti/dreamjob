import React, { useState } from 'react'

function Filter({filters, setFilters, handleCheckbox, handlefilters, resetFilters}) {


    return (
        <aside>
            <div className='max-w-57.5 border border-[#e2e8f0] p-3 rounded-lg'>
                <div className='flex justify-between'>
                    <h3 className='text-xl font-semibold'>Filter</h3>
                    <p onClick={()=>resetFilters()} className='text-blue-500 cursor-pointer'>Clear all</p>
                </div>

                {/* search keyword */}
                <div className='mt-10'>
                    <h3 className='text-lg text-[#0F172A] font-medium'>Search Keywords</h3>
                    <div className='h-10 w-50 border border-[#e2e8f0] rounded-lg shadow-sm mt-3'>
                        <input type="text"
                            value={filters.search}
                            onChange={(e) => {
                                setFilters({ ...filters, search: e.target.value })
                            }}
                            placeholder='job title or keyword'
                            className='h-full w-full outline-none pl-2' />
                    </div>
                </div>

                {/* location */}
                <div className='mt-10'>
                    <h3 className='text-lg text-[#0F172A] font-medium'>Location</h3>
                    <div className='h-10 w-50 border border-[#e2e8f0] rounded-lg shadow-sm mt-3'>
                        <input type="text"
                            value={filters.location}
                            onChange={(e) => {
                                setFilters({
                                    ...filters, location: e.target.value
                                })
                            }}
                            placeholder='enter location'
                            className='h-full w-full outline-none pl-2' />
                    </div>
                </div>

                {/* Job type */}

                <div className='mt-10'>
                    <h3 className='text-lg text-[#0F172A] font-medium'>Job Type</h3>
                    <div className='h-5 w-50 flex items-center gap-3 mt-3'>
                        <input type="checkbox"
                            checked={filters.jobType === "Full-time"}
                            onChange={() => handleCheckbox("jobType", "Full-time")}
                            className='' />
                        <p>Full Time</p>
                    </div>

                    <div className='h-5 w-50 flex items-center gap-3 mt-3'>
                        <input type="checkbox"
                            checked={filters.jobType === "Part Time"}
                            onChange={() => handleCheckbox("jobType", "Part Time")}
                            className='' />
                        <p>Part Time</p>
                    </div>

                    <div className='h-5 w-50 flex items-center gap-3 mt-3'>
                        <input type="checkbox"
                            checked={filters.jobType === "Contract"}
                            onChange={() => handleCheckbox("jobType", "Contract")}
                            className='' />
                        <p>Contract</p>
                    </div>

                    <div className='h-5 w-50 flex items-center gap-3 mt-3'>
                        <input type="checkbox"
                            checked={filters.jobType === "Internship"}
                            onChange={() => handleCheckbox("jobType", "Internship")}
                            className='' />
                        <p>Internship</p>
                    </div>
                </div>

                {/* Expereanc lavel */}

                <div className='mt-10'>
                    <h3 className='text-lg text-[#0F172A] font-medium'>Expereance Lavel</h3>
                    <div className='h-5 w-50 flex items-center gap-3 mt-3'>
                        <input type="checkbox"
                            checked={filters.expereanceLevel === "Fresher"}
                            onChange={() => handleCheckbox("expereanceLevel", "Fresher")}
                            className='' />
                        <p>Fresher</p>
                    </div>

                    <div className='h-5 w-50 flex items-center gap-3 mt-3'>
                        <input type="checkbox"
                            checked={filters.expereanceLevel === "1 - 3 Years"}
                            onChange={() => handleCheckbox("expereanceLevel", "1 - 3 Years")}
                            className='' />
                        <p>1-3 Years</p>
                    </div>

                    <div className='h-5 w-50 flex items-center gap-3 mt-3'>
                        <input type="checkbox"
                            checked={filters.expereanceLevel === "3 - 4 Years"}
                            onChange={() => handleCheckbox("expereanceLevel", "3 - 4 Years")}
                            className='' />
                        <p>3-4 Years</p>
                    </div>

                    <div className='h-5 w-50 flex items-center gap-3 mt-3'>
                        <input type="checkbox"
                            checked={filters.expereanceLevel === "5+ Years"}
                            onChange={() => handleCheckbox("expereanceLevel", "5+ Years")}
                            className='' />
                        <p>5+ Years</p>
                    </div>
                </div>
                <button onClick={()=>handlefilters()} className='py-2 px-5 bg-[#2563EB] mt-5 rounded-lg text-white'>Apply Filter</button>
            </div>
        </aside>
    )
}

export default Filter
