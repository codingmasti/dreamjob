import { createContext, useContext, useEffect, useState } from "react";

import Data from '../data/jobs_data.json'
const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [jobs, setJobs] = useState([])
    const [company, setCompany] = useState([])
    const [category, setCategory] = useState([])

    const value = {
        jobsData: Data.jobs,
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => {
    return useContext(DataContext)
}

export { useData, DataProvider }