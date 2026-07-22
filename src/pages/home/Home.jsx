import React from 'react'
import Hero from '../../components/hero/Hero'
import PopularCategories from '../../components/popular_categories/PopularCategories'
import FeaturedJobs from '../../components/featured_jobs/FeaturedJobs'
import WhyChoose from '../../components/why-choose/WhyChoose'
import Testimonials from '../../components/testimonials/Testimonials'


function Home() {
  return (
    <main>
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <WhyChoose />
      <Testimonials />
    </main>
  )
}

export default Home
