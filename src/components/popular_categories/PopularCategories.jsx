import React from 'react'
import {
    FaCode,
    FaPalette,
    FaBullhorn,
    FaChartLine,
    FaBriefcase,
    FaLaptopCode,
} from "react-icons/fa";

export const categories = [
    {
        id: 1,
        title: "Development",
        jobs: "12,345 Jobs",
        icon: FaCode,
        bg: "bg-blue-100",
        color: "text-blue-600",
    },
    {
        id: 2,
        title: "Design",
        jobs: "8,543 Jobs",
        icon: FaPalette,
        bg: "bg-purple-100",
        color: "text-purple-600",
    },
    {
        id: 3,
        title: "Marketing",
        jobs: "6,231 Jobs",
        icon: FaBullhorn,
        bg: "bg-green-100",
        color: "text-green-600",
    },
    {
        id: 4,
        title: "Sales",
        jobs: "4,235 Jobs",
        icon: FaChartLine,
        bg: "bg-yellow-100",
        color: "text-yellow-600",
    },
    {
        id: 5,
        title: "Product",
        jobs: "3,214 Jobs",
        icon: FaLaptopCode,
        bg: "bg-red-100",
        color: "text-red-600",
    },
    {
        id: 6,
        title: "Business",
        jobs: "2,123 Jobs",
        icon: FaBriefcase,
        bg: "bg-cyan-100",
        color: "text-cyan-600",
    },
];


function PopularCategories() {
    return (
        <section>
            <div className='max-w-6xl p-3 mx-auto py-10'>
                <div className='flex items-center w-full justify-between mb-6'>
                    <h2 className='text-2xl  text-[#0F172A] font-medium'>Popular Categories</h2>
                    <p className='text-blue-500'>View all</p>
                </div>
                <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 '>
                    {
                        categories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <div key={index} className='w-40 m-2 h-45 border border-[#e2e8f0] shadow-lg p-6 rounded-xl flex flex-col items-center justify-center gap-4'>
                                    <div className={`${category.bg} ${category.color} flex items-center justify-center h-15 w-15 rounded-full`}>
                                        <Icon size={30}/>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <h3 className='text-xl font-medium '>{category.title}</h3>
                                        <p>{category.jobs}</p>
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

export default PopularCategories
