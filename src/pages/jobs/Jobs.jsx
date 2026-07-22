import React, { useState } from 'react'
import Filter from '../../components/filter/Filter'
import JobCard from '../../components/job_card/JobCard'
import { useData } from '../../context/DataContext'
import { FaSearch } from 'react-icons/fa'
import VirtualJobRow from '../../components/virtual_job_row/VirtualJobRow'
import { Funnel } from 'lucide-react'
import { List } from "react-window";

function Jobs() {
  const { jobsData } = useData()
  const [appliedFilters, setAppliedFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    expereanceLevel: "",
  })
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    expereanceLevel: ""
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [toggleFlter, setToggleFilter] = useState(false)


  window.scrollTo(0,0)
  //handle checkbox functionality
  const handleCheckbox = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value, // dobara click karne par uncheck
    }));
  };

  const handlefilters = (e) => {
    setAppliedFilters(filters)
  }
  //Filter section 
  const filteredJobs = jobsData.filter((job) => {
    const matchTopSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchTitle =
      !appliedFilters.search ||
      job.title.toLowerCase().includes(appliedFilters.search.toLowerCase());

    const matchLocation =
      !appliedFilters.location ||
      job.location.full_address
        .toLowerCase()
        .includes(appliedFilters.location.toLowerCase());

    const matchJobType =
      !appliedFilters.jobType ||
      job.job_type === appliedFilters.jobType;

    const matchExperience =
      !appliedFilters.expereanceLevel ||
      job.experience.display === appliedFilters.expereanceLevel;

    return (
      matchTitle &&
      matchLocation &&
      matchJobType &&
      matchExperience &&
      matchTopSearch
    );
  });

  //reset all filters
  const resetFilters = () => {
    const intitlaFilter = {
      search: "",
      location: "",
      jobType: "",
      expereanceLevel: ""
    }

    setFilters(intitlaFilter)
    setAppliedFilters(intitlaFilter)
    setSearchTerm("")
  }




  return (
    <section>
      <div className='max-w-6xl my-10 flex mx-auto mt-10 gap-2 '>


        {/* filter section */}

        <div className='hidden lg:flex'>
          <Filter filters={filters} resetFilters={resetFilters} setFilters={setFilters} handleCheckbox={handleCheckbox} handlefilters={handlefilters} />
        </div>
        <div className='lg:w-225 mx-auto w-full '>

          <div className='flex lg:hidden justify-between items-center mx-2'>
            <span className='text-2xl font-medium'>Jobs</span>
            <button
              onClick={() => setToggleFilter(!toggleFlter)}
              className='flex gap-3 border px-2 py-2 rounded-lg bg-gray-200 border-gray-400'><Funnel />Filters</button>
          </div>
          <div className='absolute z-50 lg:hidden bg-white transition-all duration-300'>
            {toggleFlter && <Filter filters={filters} resetFilters={resetFilters} setFilters={setFilters} handleCheckbox={handleCheckbox} handlefilters={handlefilters} />}
          </div>

          <div className='flex  mx-2 gap-4'>
            <div className='lg:w-165 w-full h-10 flex items-center gap-3 px-2 rounded-lg border border-[#e2e8f0]'>
              <FaSearch className='text-xl' />
              <input type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                }}
                placeholder='Search jobs, companies...'
                className='w-full h-full outline-none' />
            </div>
            <div className='lg:w-50 hidden h-10 lg:flex px-2 rounded-lg border border-[#e2e8f0]'>
              <input type="text"
                placeholder='Short by: most resent'
                className='w-full h-full outline-none' />
            </div>
          </div>
          <hr className='my-5 lg:hidden' />
          <div className='h-[75vh] mt-3'>
            <List
              rowComponent={VirtualJobRow}
              rowCount={filteredJobs.length}
              rowHeight={140}
              rowProps={{
                jobs: filteredJobs
              }}
              style={{
                height: 700
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobs
