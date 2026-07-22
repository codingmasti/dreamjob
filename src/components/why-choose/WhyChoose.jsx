import React from 'react'
import {
    FaBriefcase,
    FaBuilding,
    FaPaperPlane,
    FaChartLine,
} from "react-icons/fa";

export const whyChooseUs = [
    {
        id: 1,
        icon: FaBriefcase,
        title: "Thousands of Jobs",
        description:
            "Browse thousands of verified job opportunities from top companies across multiple industries.",
        bg: "bg-blue-100",
        color: "text-blue-600",
    },
    {
        id: 2,
        icon: FaBuilding,
        title: "Verified Companies",
        description:
            "Apply with confidence to trusted companies that are carefully verified by our team.",
        bg: "bg-green-100",
        color: "text-green-600",
    },
    {
        id: 3,
        icon: FaPaperPlane,
        title: "Easy Application",
        description:
            "Apply to your dream job in just one click with our simple and fast application process.",
        bg: "bg-purple-100",
        color: "text-purple-600",
    },
    {
        id: 4,
        icon: FaChartLine,
        title: "Career Growth",
        description:
            "Discover opportunities that help you learn new skills and grow your professional career.",
        bg: "bg-orange-100",
        color: "text-orange-600",
    },
];

function WhyChoose() {
    return (
        <section>
            <div className='max-w-6xl p-3 mx-auto py-10'>
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-2xl  text-[#0F172A] font-medium'>Why Choose JobPortal?</h2>
                </div>
                <div className=' grid md:grid-cols-3 lg:grid-cols-4 '>
                    {
                        whyChooseUs.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={index} className='w-60 m-2 h-30 p-1 rounded-xl flex gap-4'>
                                    <div className={`${item.bg} ${item.color} flex items-center justify-center h-14 w-15 rounded-full`}>
                                        <Icon size={30} />
                                    </div>
                                    <div className='flex flex-col w-45 '>
                                        <h3 className='text-lg font-medium'>{item.title}</h3>
                                        <p className='line-clamp-3'>{item.description}</p>
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

export default WhyChoose
