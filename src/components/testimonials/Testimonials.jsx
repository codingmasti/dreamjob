import React from 'react'
import { FaStar } from "react-icons/fa";

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Anjali Sharma",
            role: "Frontend Developer",
            company: "Google",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            review:
                "Dream Job helped me find my dream role in just two weeks. The platform is simple, fast, and offers genuine opportunities.",
        },
        {
            id: 2,
            name: "Rahul Verma",
            role: "UI/UX Designer",
            company: "Microsoft",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            review:
                "The application process was incredibly smooth. I received interview calls from multiple top companies within days.",
        },
        {
            id: 3,
            name: "Sneha Patel",
            role: "Product Manager",
            company: "Amazon",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
            review:
                "I highly recommend Dream Job to anyone looking for career growth. The job recommendations were accurate and relevant.",
        },
    ];
    return (
        <section>
            <div className='max-w-6xl p-3 mx-auto py-20 '>
                <div className='mb-6'>
                    <h2 className='text-2xl  text-[#0F172A] font-medium'>Loved by job seekers</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white w-92  rounded-2xl p-6 shadow-sm border border-gray-200"
                        >
                            <div className="flex items-center gap-1 text-yellow-500">
                                {[...Array(item.rating)].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </div>

                            <p className="mt-4 text-gray-600  leading-7">
                                "{item.review}"
                            </p>

                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold ">{item.name}</h4>
                                    <p className="text-sm text-gray-500">
                                        {item.role} • {item.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
