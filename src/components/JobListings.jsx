import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing'


const JobListings = ( {isHome = false}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => { 
      const fetchJobs = async () => {
        try{
          const res = await fetch('http://localhost:8000/jobs')
          const data = await res.json();
          setJobs(data)
        }catch(error){
          console.log('Error fetching data', error)
        } finally{
          setLoading(false)
        }
        
      }

    }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        {/* Section title, dynamically changes based on the 'isHome' prop */}
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map over the selected job list (JobsListings) and render a JobListing component for each job */}
            { JobsListings.map((job) => (
                <JobListing 
                    key={job.id} // Unique key for list rendering optimization
                    job={ job } // Pass the individual job object as a prop
                />
            ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings