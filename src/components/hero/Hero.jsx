import React from 'react'
import { FaGlobe, FaSearch, FaSearchLocation } from 'react-icons/fa'
import Hero_image from '../../assets/hero_img.webp'


function Hero() {
    return (
        <section>
            <div className='max-w-6xl mx-auto py-10 lg:py-20'>
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    <div className='h-full p-3'>
                        <div className='flex items-center gap-4 bg-blue-100 px-4 py-2 w-55 rounded-full mb-6'><FaGlobe className='text-[#4f46e5]' /> Find your dream job</div>
                        <h1 className='text-3xl lg:text-5xl font-bold leading-tight'>Find The Job That <br /> Matches <span className='text-[#2563EB]'>Your Passino</span></h1>

                        <p className='mt-6 text-md lg:text-xl '>Explore thousands of job opportunities from top companies <br />and find the perfect fit for your career. </p>

                        <div className='mt-10 w-full h-15 border border-[#e2e8f0] flex justify-between items-center rounded-lg shadow-lg'>
                            <div className='flex lg:w-[40%] text-[#0F172A] ml-3 h-full items-center justify-center gap-1 font-medium'>
                                <FaSearch className='w-5 h-5' />
                                <input type="text" placeholder='job title or keyword'
                                    className='outline-0 h-full' />
                            </div>
                            <div className='hidden md:flex w-[30%] text-[#0F172A] h-full items-center justify-center gap-1 font-medium'>
                                <FaSearchLocation className='w-5 h-5' />
                                <input type="text" placeholder='Location' className='h-full w-[80%] outline-0' />
                            </div>

                            <button className='h-14 w-fit bg-[#2563EB] font-medium px-6 py-2 text-white text-center rounded-lg'>Search Jobs</button>

                        </div>
                        <div className='flex w-full flex-wrap gap-4 mt-10 items-center justify-center'>
                            <h2 className='text-[#0F172A] font-semibold'>Popular Searches:</h2>
                            <p className='px-3 py-2 text-blue-400 font-semibold bg-[#F8FAFC] rounded-full'>Developer</p>
                            <p className='px-3 py-2 text-blue-500 font-semibold bg-[#F8FAFC] rounded-full'>Designer</p>
                            <p className='px-3 py-2 text-blue-700 font-semibold bg-[#F8FAFC] rounded-full'>Marketing</p>
                            <p className='px-3 py-2 text-blue-600 font-semibold bg-[#F8FAFC] rounded-full'>Business</p>
                        </div>
                    </div>

                    <div className='hidden lg:flex'>
                        <img src={Hero_image} alt="Hero imgae" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
