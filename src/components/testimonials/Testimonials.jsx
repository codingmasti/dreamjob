import React from 'react'
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
            name: "Rahul Verma",
            role: "UI/UX Designer",
            company: "Microsoft",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            review:
                "The application process was incredibly smooth. I received interview calls from multiple top companies within days.",
        },
        {
            id: 4,
            name: "Rahul Verma",
            role: "UI/UX Designer",
            company: "Microsoft",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            review:
                "The application process was incredibly smooth. I received interview calls from multiple top companies within days.",
        },
        {
            id: 5,
            name: "Rahul Verma",
            role: "UI/UX Designer",
            company: "Microsoft",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            review:
                "The application process was incredibly smooth. I received interview calls from multiple top companies within days.",
        },
        {
            id: 6,
            name: "Rahul Verma",
            role: "UI/UX Designer",
            company: "Microsoft",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            review:
                "The application process was incredibly smooth. I received interview calls from multiple top companies within days.",
        },
        {
            id: 7,
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

            {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
            ...

            <div className='max-w-6xl p-3 mx-auto py-20 overflow-x-hidden'>
                <div className='mb-6'>
                    <h2 className='text-2xl  text-[#0F172A] font-medium'>Loved by job seekers</h2>
                </div>
                    <div className='py-5 mt-5 flex justify-end gap-x-3'>
                        <button className='custom-prev flex justify-center items-center text-2xl rounded-lg w-11 h-11 text-zinc-800 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 bg-zinc-100'>
                            <IoIosArrowBack />
                        </button>
                        <button className='custom-next flex justify-center items-center text-2xl rounded-lg w-11 h-11 text-zinc-800 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 bg-zinc-100'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                <Swiper
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev"
                    }} loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    modules={[Navigation]} className="mySwiper">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                        {testimonials.map((item) => (
                            <SwiperSlide>
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
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section >
    )
}

export default Testimonials
